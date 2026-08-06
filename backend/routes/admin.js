const express = require('express');
const { users } = require('../config/database');
const router = express.Router();

// GET /api/admin/users
router.get('/users', (req, res) => {
    const allUsers = Array.from(users.values()).map(u => ({
        id: u.id,
        name: u.name,
        email: u.email,
        subscription: u.subscription || 'free',
        createdAt: u.createdAt
    }));
    res.json({ success: true, count: allUsers.length, users: allUsers });
});

// GET /api/admin/progress
router.get('/progress', (req, res) => {
    res.json({ success: true, count: 0, progress: [] });
});

module.exports = router;
