const express = require('express');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/:userId', authenticate, (req, res) => {
    res.json({
        userId: req.params.userId,
        overview: {
            totalStudyTime: 124, topicsMastered: 18, topicsWeak: 5,
            examReadiness: 72, streakDays: 12
        },
        subjects: [
            { name: 'Mathematics', mastery: 85, weakAreas: ['Calculus'] },
            { name: 'Economics', mastery: 72, weakAreas: ['Macroeconomics'] },
            { name: 'Physics', mastery: 68, weakAreas: ['Electromagnetism'] }
        ],
        progressTrend: [45, 52, 58, 61, 65, 68, 72, 75, 78, 80, 82, 85],
        heatmap: {
            strong: ['Algebra', 'Mechanics'],
            moderate: ['Geometry'],
            weak: ['Calculus', 'Macroeconomics']
        }
    });
});

module.exports = router;
