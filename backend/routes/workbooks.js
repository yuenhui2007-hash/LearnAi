const express = require('express');
const { authenticate } = require('../middleware/auth');
const Workbook = require('../models/Workbook');
const router = express.Router();

router.post('/create', authenticate, async (req, res) => {
    const wb = await Workbook.create({ ...req.body, userId: req.user.id });
    res.status(201).json({ success: true, workbook: wb });
});

router.get('/', authenticate, async (req, res) => {
    res.json(await Workbook.find({ userId: req.user.id }));
});

module.exports = router;