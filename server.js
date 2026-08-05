/**
 * LearnAI Platform — Backend Server
 * Serves frontend + API endpoints
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== API Routes =====

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'LearnAI Platform', timestamp: new Date().toISOString() });
});

// Platform info
app.get('/api/info', (req, res) => {
    res.json({
        name: 'LearnAI',
        version: '1.0.0',
        description: 'AI-Powered Tutor & Personalized Learning Platform',
        features: [
            'AI Digital Twin',
            'Adaptive Learning Path',
            'AI Exam Predictor',
            'Weakness Heatmap',
            'Memory Decay Engine',
            'AI Past Paper Coach',
            'AI Study Companion',
            'Explain at Any Level',
            'Mistake Library',
            'Confidence Detection'
        ],
        pricing: {
            tutor: { range: '$10-30', period: 'month' },
            family: { range: 'Custom', period: 'month' },
            school: { range: 'Custom', period: 'year' }
        }
    });
});

// Upload materials endpoint (stub)
app.post('/api/upload', (req, res) => {
    const { type, subject, level } = req.body;
    res.json({
        success: true,
        message: 'Material uploaded successfully',
        analysis: {
            type: type || 'textbook',
            subject: subject || 'Mathematics',
            level: level || 'Secondary',
            concepts_detected: 12,
            topics_found: 8,
            estimated_study_time: '45 hours'
        }
    });
});

// Generate study resources (stub)
app.post('/api/generate', (req, res) => {
    const { resource_type, material_id } = req.body;
    res.json({
        success: true,
        generated: {
            type: resource_type || 'flashcards',
            count: 24,
            format: 'interactive',
            download_url: '/api/download/flashcards-001'
        }
    });
});

// Mark homework/essay (stub)
app.post('/api/mark', (req, res) => {
    const { content, subject, criteria } = req.body;
    res.json({
        success: true,
        result: {
            score: 18,
            total: 25,
            grade: 'B+',
            feedback: 'Strong knowledge but needs more evaluation. Consider short-term vs long-term impacts.',
            breakdown: {
                knowledge: 5,
                application: 4,
                analysis: 5,
                evaluation: 4
            },
            suggestions: [
                'Include stronger evaluation',
                'Discuss short-term vs long-term impacts',
                'Add more real-world examples'
            ]
        }
    });
});

// Create study plan (stub)
app.post('/api/study-plan', (req, res) => {
    const { exam_date, subjects, hours_per_day } = req.body;
    const daysUntil = exam_date ? Math.ceil((new Date(exam_date) - new Date()) / (1000 * 60 * 60 * 24)) : 60;
    
    res.json({
        success: true,
        plan: {
            duration_days: daysUntil,
            phases: [
                { week: '1-3', focus: 'Weak chapters review', priority: 'high' },
                { week: '4-6', focus: 'Topical past papers', priority: 'high' },
                { week: '7-8', focus: 'Full exam simulations', priority: 'medium' },
                { week: 'Final', focus: 'Targeted revision', priority: 'high' }
            ],
            daily_schedule: {
                morning: 'Concept review (2h)',
                afternoon: 'Practice questions (1.5h)',
                evening: 'Flashcard review (30min)'
            }
        }
    });
});

// AI Tutor chat (stub)
app.post('/api/tutor', (req, res) => {
    const { question, subject, level } = req.body;
    res.json({
        success: true,
        response: {
            answer: `Here's an explanation for your ${subject || 'question'} at ${level || 'high school'} level...`,
            related_topics: ['Topic A', 'Topic B', 'Topic C'],
            suggested_practice: 'Try 3 practice questions on this topic',
            confidence: 0.94
        }
    });
});

// Analytics dashboard data (stub)
app.get('/api/analytics/:userId', (req, res) => {
    res.json({
        user_id: req.params.userId,
        overview: {
            total_study_time: 124,
            topics_mastered: 18,
            topics_weak: 5,
            exam_readiness: 72,
            streak_days: 12
        },
        subjects: [
            { name: 'Mathematics', mastery: 85, weak_areas: ['Calculus', 'Probability'] },
            { name: 'Economics', mastery: 72, weak_areas: ['Macroeconomics', 'Evaluation'] },
            { name: 'Physics', mastery: 68, weak_areas: ['Electromagnetism', 'Waves'] }
        ],
        progress_trend: [45, 52, 58, 61, 65, 68, 72, 75, 78, 80, 82, 85],
        heatmap: {
            strong: ['Algebra', 'Mechanics', 'Supply & Demand'],
            moderate: ['Geometry', 'Thermodynamics'],
            weak: ['Calculus', 'Macroeconomics', 'Electromagnetism']
        }
    });
});

// ===== Frontend: Serve static files =====
app.use(express.static(path.join(__dirname)));

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Catch-all: serve index.html (SPA support)
app.get('*', (req, res) => {
    const filePath = path.join(__dirname, req.path);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        res.sendFile(filePath);
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

// ===== Start Server =====
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔══════════════════════════════════════════════════════╗
║                                                      ║
║   🎓 LearnAI Platform                                ║
║   AI-Powered Tutor & Personalized Learning           ║
║                                                      ║
╠══════════════════════════════════════════════════════╣
║                                                      ║
║   🌐 Frontend:  http://localhost:${PORT}/             ║
║   📡 API Base:  http://localhost:${PORT}/api/         ║
║   💚 Health:    http://localhost:${PORT}/api/health   ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
    `);
});

module.exports = app;
