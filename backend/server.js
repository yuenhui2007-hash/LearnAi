/**
 * LearnAI Platform — Production Backend Server
 * Express API with auth, routes, and all platform features
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// ===== API Routes =====
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/materials', require('./routes/materials'));
app.use('/api/study', require('./routes/study'));
app.use('/api/tutor', require('./routes/tutor'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/workbooks', require('./routes/workbooks'));

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'LearnAI Platform',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Platform info
app.get('/api/info', (req, res) => {
    res.json({
        name: 'LearnAI',
        version: '1.0.0',
        description: 'AI-Powered Tutor & Personalized Learning Platform',
        features: [
            'AI Digital Twin', 'Adaptive Learning Path', 'AI Exam Predictor',
            'Weakness Heatmap', 'Memory Decay Engine', 'AI Past Paper Coach',
            'AI Study Companion', 'Explain at Any Level', 'Mistake Library',
            'Confidence Detection', 'AI Classroom Mode', 'AI Goal Engine',
            'Parent Dashboard', 'Teacher Dashboard', 'Gamification'
        ]
    });
});

// ===== Serve Frontend (Production) =====
app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Catch-all for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   🎓 LearnAI Platform Backend                            ║
║   AI-Powered Tutor & Personalized Learning               ║
║                                                          ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║   🌐 Server:    http://0.0.0.0:${PORT}                     ║
║   📡 API:       http://localhost:${PORT}/api/              ║
║   💚 Health:    http://localhost:${PORT}/api/health        ║
║                                                          ║
║   🔑 Auth:      POST /api/auth/register                  ║
║                 POST /api/auth/login                     ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
    `);
});

module.exports = app;
