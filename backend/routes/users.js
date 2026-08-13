const express = require('express');
const { authenticate } = require('../middleware/auth');
const { users } = require('../config/database');
const router = express.Router();

router.get('/me', authenticate, (req, res) => {
    const { id, email, name, role, grade, subjects, interests } = req.user;
    res.json({ id, email, name, role, grade, subjects, interests });
});

router.put('/me', authenticate, (req, res) => {
    const user = users.get(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    Object.assign(user, req.body);
    res.json(user);
});

module.exports = router;
