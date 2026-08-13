const express = require('express');
const { authenticate } = require('../middleware/auth');
const { workbooks } = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// GET /api/workbooks — list workbooks
router.get('/', (req, res) => {
    const all = Array.from(workbooks.values());
    res.json({ success: true, count: all.length, workbooks: all });
});

// POST /api/workbooks — create workbook (protected)
router.post('/', authenticate, (req, res) => {
    const { title, subject, chapters } = req.body;
    const id = uuidv4();
    const workbook = {
        id,
        title: title || 'Untitled Workbook',
        subject: subject || 'General',
        chapters: chapters || [],
        createdBy: req.user.id,
        createdAt: new Date().toISOString(),
        status: 'draft'
    };
    workbooks.set(id, workbook);
    res.status(201).json({ success: true, workbook });
});

// GET /api/workbooks/:id — get single workbook
router.get('/:id', (req, res) => {
    const wb = workbooks.get(req.params.id);
    if (!wb) return res.status(404).json({ error: 'Workbook not found' });
    res.json({ success: true, workbook: wb });
});

module.exports = router;
