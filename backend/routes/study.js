const express = require('express');
const { authenticate } = require('../middleware/auth');
const { studyPlans, users } = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// GET /api/study/plans — get user's study plans
router.get('/plans', authenticate, (req, res) => {
    const plans = Array.from(studyPlans.values())
        .filter(p => p.userId === req.user.id);
    res.json({ success: true, count: plans.length, plans });
});

// POST /api/study/plans — create study plan
router.post('/plans', authenticate, (req, res) => {
    const { title, subjects, schedule } = req.body;
    const id = uuidv4();
    const plan = {
        id, userId: req.user.id,
        title: title || 'My Study Plan',
        subjects: subjects || [],
        schedule: schedule || {},
        createdAt: new Date().toISOString()
    };
    studyPlans.set(id, plan);
    res.status(201).json({ success: true, plan });
});

// GET /api/study/progress — get study progress summary
router.get('/progress', authenticate, (req, res) => {
    const user = users.get(req.user.id);
    res.json({
        success: true,
        userId: req.user.id,
        subjectsStudied: user?.subjects || [],
        totalStudyTime: 0,
        topicsCompleted: 0
    });
});

module.exports = router;
