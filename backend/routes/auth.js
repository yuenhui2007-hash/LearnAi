const express = require('express');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { users, activityLogs } = require('../config/database');
const { generateToken } = require('../middleware/auth');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const { email, password, name, role = 'student' } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ error: 'Email, password, and name required' });
    }
    const existing = Array.from(users.values()).find(u => u.email === email);
    if (existing) return res.status(409).json({ error: 'Email already registered' });

    const id = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id, email, name, role, password: hashedPassword, createdAt: new Date().toISOString() };
    users.set(id, user);

    // Log registration activity
    activityLogs.set(uuidv4(), {
        userId: id,
        userName: name,
        userEmail: email,
        action: 'register',
        timestamp: new Date().toISOString(),
        ip: req.ip || req.connection.remoteAddress
    });

    const token = generateToken(user);
    res.status(201).json({ token, user: { id, email, name, role } });
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = Array.from(users.values()).find(u => u.email === email);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    // Log login activity
    activityLogs.set(uuidv4(), {
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        action: 'login',
        timestamp: new Date().toISOString(),
        ip: req.ip || req.connection.remoteAddress
    });

    const token = generateToken(user);
    res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

// Logout (track activity)
router.post('/logout', (req, res) => {
    const { userId, userName, userEmail } = req.body;
    if (userId) {
        activityLogs.set(uuidv4(), {
            userId,
            userName: userName || 'Unknown',
            userEmail: userEmail || 'Unknown',
            action: 'logout',
            timestamp: new Date().toISOString(),
            ip: req.ip || req.connection.remoteAddress
        });
    }
    res.json({ success: true, message: 'Logged out' });
});

module.exports = router;
