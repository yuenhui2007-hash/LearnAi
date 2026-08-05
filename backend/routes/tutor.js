const express = require('express');
const { authenticate } = require('../middleware/auth');
const Session = require('../models/Session');
const router = express.Router();

router.post('/ask', authenticate, async (req, res) => {
    const { question, subject, level = 'high school' } = req.body;
    await Session.create({ userId: req.user.id, type: 'tutor', question, subject });
    res.json({ answer: `${level}-level explanation for ${subject || 'your question'}`, relatedTopics: ['Topic A', 'Topic B'], confidence: 0.94 });
});

router.post('/mark', authenticate, async (req, res) => {
    const { content, subject } = req.body;
    await Session.create({ userId: req.user.id, type: 'marking', question: content, subject });
    res.json({ score: 18, total: 25, grade: 'B+', feedback: 'Strong but needs more evaluation.', breakdown: { knowledge: 5, application: 4, analysis: 5, evaluation: 4 } });
});

module.exports = router;