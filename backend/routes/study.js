const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { authenticate } = require('../middleware/auth');
const { studyPlans } = require('../config/database');
const router = express.Router();

router.post('/plan', authenticate, (req, res) => {
    const { examDate, subjects, hoursPerDay } = req.body;
    const id = uuidv4();
    const daysUntil = Math.ceil((new Date(examDate) - new Date()) / (1000 * 60 * 60 * 24));
    const plan = {
        id, userId: req.user.id, examDate, subjects, hoursPerDay, daysUntil,
        phases: [
            { week: '1-3', focus: 'Weak chapters review', priority: 'high' },
            { week: '4-6', focus: 'Topical past papers', priority: 'high' },
            { week: '7-8', focus: 'Full exam simulations', priority: 'medium' },
            { week: 'Final', focus: 'Targeted revision', priority: 'high' }
        ],
        createdAt: new Date().toISOString()
    };
    studyPlans.set(id, plan);
    res.status(201).json(plan);
});

router.get('/plans', authenticate, (req, res) => {
    const plans = Array.from(studyPlans.values()).filter(p => p.userId === req.user.id);
    res.json(plans);
});

router.post('/generate', authenticate, (req, res) => {
    const { type, materialId, format = 'interactive' } = req.body;
    res.json({ success: true, generated: { type, count: 24, format, downloadUrl: `/api/download/${type}-${Date.now()}` } });
});

module.exports = router;
