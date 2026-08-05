const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { authenticate } = require('../middleware/auth');
const { workbooks } = require('../config/database');
const router = express.Router();

router.post('/create', authenticate, (req, res) => {
    const { title, subject, theme, age, pages = 20 } = req.body;
    const id = uuidv4();
    const workbook = {
        id, userId: req.user.id, title, subject, theme, age, pages,
        status: 'generating', price: 29,
        createdAt: new Date().toISOString()
    };
    workbooks.set(id, workbook);
    res.status(201).json({ success: true, workbook });
});

router.get('/', authenticate, (req, res) => {
    const list = Array.from(workbooks.values()).filter(w => w.userId === req.user.id);
    res.json(list);
});

module.exports = router;
