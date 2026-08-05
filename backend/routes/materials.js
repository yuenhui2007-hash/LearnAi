const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { authenticate } = require('../middleware/auth');
const { materials } = require('../config/database');
const router = express.Router();

router.post('/upload', authenticate, (req, res) => {
    const { type, subject, level, title, content } = req.body;
    const id = uuidv4();
    const material = { id, userId: req.user.id, type, subject, level, title, content, uploadedAt: new Date().toISOString() };
    materials.set(id, material);
    res.status(201).json({ success: true, material });
});

router.get('/', authenticate, (req, res) => {
    const userMaterials = Array.from(materials.values()).filter(m => m.userId === req.user.id);
    res.json(userMaterials);
});

router.get('/:id', authenticate, (req, res) => {
    const material = materials.get(req.params.id);
    if (!material || material.userId !== req.user.id) return res.status(404).json({ error: 'Not found' });
    res.json(material);
});

router.delete('/:id', authenticate, (req, res) => {
    materials.delete(req.params.id);
    res.json({ success: true });
});

module.exports = router;
