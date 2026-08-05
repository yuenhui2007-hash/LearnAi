const express = require('express');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { users } = require('../config/database');
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

    const token = generateToken(user);
    res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

module.exports = router;
