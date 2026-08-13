const express = require('express');
const { authenticate } = require('../middleware/auth');
const { sessions } = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// POST /api/tutor/chat — AI tutor chat session
router.post('/chat', authenticate, (req, res) => {
    const { message, subject } = req.body;
    const sessionId = uuidv4();
    const reply = `I'm your AI tutor for ${subject || 'general study'}. You asked: "${message}". Let me help you understand this topic better!`;

    sessions.set(sessionId, {
        id: sessionId,
        userId: req.user.id,
        subject,
        messages: [{ role: 'user', text: message }, { role: 'tutor', text: reply }],
        createdAt: new Date().toISOString()
    });

    res.json({
        success: true,
        sessionId,
        reply,
        suggestions: [
            'Can you explain this in simpler terms?',
            'Give me a practice question on this.',
            'What are common exam mistakes here?'
        ]
    });
});

// GET /api/tutor/sessions — get user's tutor sessions
router.get('/sessions', authenticate, (req, res) => {
    const userSessions = Array.from(sessions.values())
        .filter(s => s.userId === req.user.id)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json({ success: true, count: userSessions.length, sessions: userSessions });
});

module.exports = router;
