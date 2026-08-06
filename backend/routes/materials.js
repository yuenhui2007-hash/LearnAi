const express = require('express');
const { authenticate } = require('../middleware/auth');
const { materials } = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// GET /api/materials — list all study materials
router.get('/', (req, res) => {
    const all = Array.from(materials.values());
    res.json({ success: true, count: all.length, materials: all });
});

// GET /api/materials/:id — get single material
router.get('/:id', (req, res) => {
    const m = materials.get(req.params.id);
    if (!m) return res.status(404).json({ error: 'Material not found' });
    res.json({ success: true, material: m });
});

// POST /api/materials — create material (protected)
router.post('/', authenticate, (req, res) => {
    const { title, subject, type, content, url } = req.body;
    const id = uuidv4();
    const material = {
        id, title, subject, type: type || 'note',
        content, url,
        createdBy: req.user.id,
        createdAt: new Date().toISOString()
    };
    materials.set(id, material);
    res.status(201).json({ success: true, material });
});

module.exports = router;
