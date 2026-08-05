const express = require('express');
const { authenticate } = require('../middleware/auth');
const Workbook = require('../models/Workbook');
const router = express.Router();
router.post('/create', authenticate, async (req, res) => res.status(201).json({ success: true, workbook: await Workbook.create({ ...req.body, userId: req.user.id }) }));
router.get('/', authenticate, async (req, res) => res.json(await Workbook.find({ userId: req.user.id })));
module.exports = router;
