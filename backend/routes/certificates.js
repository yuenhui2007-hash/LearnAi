const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { authenticate } = require('../middleware/auth');
const { users, academyProgress, certificates } = require('../config/database');
const router = express.Router();

// Create SMTP transporter (configure via env vars)
function createTransporter() {
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = parseInt(process.env.SMTP_PORT || '587');
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
        console.warn('[CERT] SMTP credentials not configured. Certificate emails will be logged but not sent.');
        return null;
    }

    return nodemailer.createTransporter({
        host,
        port,
        secure: port === 465,
        auth: { user, pass }
    });
}

// Generate certificate HTML from template
function generateCertificateHTML(data) {
    const templatePath = path.join(__dirname, '..', 'templates', 'certificate.html');
    let html = fs.readFileSync(templatePath, 'utf8');
    html = html.replace(/{{name}}/g, data.name);
    html = html.replace(/{{score}}/g, data.score);
    html = html.replace(/{{date}}/g, data.date);
    html = html.replace(/{{certId}}/g, data.certId);
    return html;
}

// POST /api/certificates/issue — Issue certificate if eligible
router.post('/issue', authenticate, async (req, res) => {
    const userId = req.user.id;
    const user = users.get(userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Get user's academy progress
    const progress = academyProgress.get(userId) || {};
    const levels = [1, 2, 3, 4, 5, 6];

    // Check all levels completed
    const completedLevels = levels.filter(l => progress[l] && progress[l].completed);
    if (completedLevels.length < 6) {
        return res.status(403).json({
            error: 'Not all levels completed',
            completed: completedLevels.length,
            required: 6
        });
    }

    // Calculate average score across all levels
    const scores = completedLevels.map(l => progress[l].score || 0);
    const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

    // Require 80%+ average
    if (avgScore < 80) {
        return res.status(403).json({
            error: 'Minimum 80% average score required',
            currentScore: avgScore,
            requiredScore: 80
        });
    }

    // Check if certificate already issued
    const existingCert = Array.from(certificates.values()).find(
        c => c.userId === userId && c.status === 'issued'
    );
    if (existingCert) {
        return res.status(409).json({
            error: 'Certificate already issued',
            certificate: existingCert
        });
    }

    // Generate certificate
    const certId = 'ZAA-' + uuidv4().split('-')[0].toUpperCase();
    const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    const certData = {
        certId,
        userId,
        userEmail: user.email,
        userName: user.name,
        score: avgScore,
        date,
        issuedAt: new Date().toISOString(),
        status: 'issued'
    };

    certificates.set(certId, certData);

    // Generate certificate HTML
    const certHTML = generateCertificateHTML({
        name: user.name,
        score: avgScore,
        date,
        certId
    });

    // Send email
    const transporter = createTransporter();
    let emailSent = false;

    if (transporter) {
        try {
            await transporter.sendMail({
                from: `"Zetrix AI Academy" <${process.env.SMTP_USER}>`,
                to: user.email,
                subject: '🏆 Your Zetrix AI Academy Certificate',
                html: `
                    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
                        <h2 style="color:#6366f1;">Congratulations, ${user.name}!</h2>
                        <p>You have successfully completed all 6 levels of the Zetrix AI Academy with an average score of <strong>${avgScore}%</strong>.</p>
                        <p>Your certificate (ID: <strong>${certId}</strong>) is attached to this email.</p>
                        <div style="background:#f8fafc;padding:20px;border-radius:12px;margin:20px 0;text-align:center;">
                            <div style="font-size:3rem;margin-bottom:12px;">🎓</div>
                            <h3 style="color:#0f172a;margin-bottom:8px;">Certified Zetrix AI Professional</h3>
                            <p style="color:#64748b;font-size:0.9rem;">Awarded on ${date}</p>
                        </div>
                        <p style="color:#64748b;font-size:0.85rem;">Keep learning and growing with AI!</p>
                    </div>
                `,
                attachments: [{
                    filename: `Zetrix-AI-Certificate-${certId}.html`,
                    content: certHTML,
                    contentType: 'text/html'
                }]
            });
            emailSent = true;
            console.log(`[CERT] Certificate ${certId} emailed to ${user.email}`);
        } catch (err) {
            console.error('[CERT] Email failed:', err.message);
        }
    } else {
        console.log(`[CERT] Certificate ${certId} generated for ${user.email} (SMTP not configured, email not sent)`);
    }

    res.json({
        success: true,
        certificate: certData,
        emailSent,
        message: emailSent
            ? 'Certificate issued and emailed successfully'
            : 'Certificate issued. Configure SMTP to enable email delivery.'
    });
});

// GET /api/certificates/me — Get user's certificate status
router.get('/me', authenticate, (req, res) => {
    const userId = req.user.id;
    const progress = academyProgress.get(userId) || {};
    const levels = [1, 2, 3, 4, 5, 6];
    const completedLevels = levels.filter(l => progress[l] && progress[l].completed);
    const scores = completedLevels.map(l => progress[l].score || 0);
    const avgScore = completedLevels.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / completedLevels.length)
        : 0;

    const cert = Array.from(certificates.values()).find(
        c => c.userId === userId && c.status === 'issued'
    );

    res.json({
        eligible: completedLevels.length === 6 && avgScore >= 80,
        completedLevels: completedLevels.length,
        totalLevels: 6,
        averageScore: avgScore,
        minimumRequired: 80,
        certificate: cert || null
    });
});

// GET /api/certificates/:id — Download certificate HTML
router.get('/:id', (req, res) => {
    const cert = certificates.get(req.params.id);
    if (!cert) return res.status(404).json({ error: 'Certificate not found' });

    const html = generateCertificateHTML({
        name: cert.userName,
        score: cert.score,
        date: cert.date,
        certId: cert.certId
    });

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', `inline; filename="certificate-${cert.certId}.html"`);
    res.send(html);
});

module.exports = router;
