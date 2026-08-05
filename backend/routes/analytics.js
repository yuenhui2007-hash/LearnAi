const express = require('express');
const { authenticate } = require('../middleware/auth');
const Session = require('../models/Session');
const router = express.Router();

router.get('/me', authenticate, async (req, res) => {
    const sessions = await Session.find({ userId: req.user.id });
    res.json({
        userId: req.user.id,
        overview: { totalStudyTime: sessions.length * 30, topicsMastered: 18, topicsWeak: 5, examReadiness: 72, streakDays: 12 },
        subjects: [{ name: 'Mathematics', mastery: 85 }, { name: 'Economics', mastery: 72 }],
        progressTrend: [45, 52, 58, 61, 65, 68, 72, 75, 78, 80, 82, 85]
    });
});

module.exports = router;