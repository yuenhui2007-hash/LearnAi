const express = require('express');
const { authenticate } = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();

router.get('/me', authenticate, async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
});

router.put('/me', authenticate, async (req, res) => {
    const updates = {};
    ['name', 'grade', 'subjects', 'interests', 'avatar'].forEach(f => { if (req.body[f]) updates[f] = req.body[f]; });
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-password');
    res.json(user);
});

module.exports = router;