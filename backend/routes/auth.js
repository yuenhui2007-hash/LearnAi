const express = require('express');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { users, activityLogs, isMongo, User, ActivityLog } = require('../config/database');
const { generateToken } = require('../middleware/auth');
const router = express.Router();

// Cookie options (httpOnly, secure in production)
const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
};

// Register
router.post('/register', async (req, res) => {
    const { email, password, name, role = 'student' } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ error: 'Email, password, and name required' });
    }
    if (password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    try {
        // Check existing
        if (isMongo && User) {
            const existing = await User.findOne({ email });
            if (existing) return res.status(409).json({ error: 'Email already registered' });

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ email, name, role, password: hashedPassword });
            await user.save();

            const token = generateToken({ id: user._id.toString(), email: user.email, role: user.role });
            res.cookie('token', token, COOKIE_OPTIONS);
            return res.status(201).json({ user: { id: user._id.toString(), email: user.email, name: user.name, role: user.role } });
        }

        // In-memory fallback
        const existing = Array.from(users.values()).find(u => u.email === email);
        if (existing) return res.status(409).json({ error: 'Email already registered' });

        const id = uuidv4();
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { id, email, name, role, password: hashedPassword, createdAt: new Date().toISOString() };
        users.set(id, user);

        activityLogs.set(uuidv4(), {
            userId: id, userName: name, userEmail: email,
            action: 'register', timestamp: new Date().toISOString(),
            ip: req.ip || req.connection.remoteAddress
        });

        const token = generateToken(user);
        res.cookie('token', token, COOKIE_OPTIONS);
        res.status(201).json({ user: { id, email, name, role } });
    } catch (err) {
        console.error('Register error:', err);
        res.status(500).json({ error: 'Registration failed' });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user;
        if (isMongo && User) {
            user = await User.findOne({ email });
        } else {
            user = Array.from(users.values()).find(u => u.email === email);
        }

        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

        const userId = user._id ? user._id.toString() : user.id;
        const token = generateToken({ id: userId, email: user.email, role: user.role });
        res.cookie('token', token, COOKIE_OPTIONS);
        res.json({ user: { id: userId, email: user.email, name: user.name, role: user.role } });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Login failed' });
    }
});

// Logout
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ success: true });
});

module.exports = router;
