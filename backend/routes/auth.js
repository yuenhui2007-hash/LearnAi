const express = require('express');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const User = require('../models/User');
const { generateToken } = require('../middleware/auth');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, password, name, role = 'student' } = req.body;
    if (!email || !password || !name) return res.status(400).json({ error: 'Email, password, name required' });
    if (!validator.isEmail(email)) return res.status(400).json({ error: 'Invalid email' });
    if (password.length < 6) return res.status(400).json({ error: 'Password must be 6+ characters' });
    if (await User.findOne({ email })) return res.status(409).json({ error: 'Email exists' });

    const hashed = await bcrypt.hash(password, 12);
    const user = await User.create({ email: email.toLowerCase(), password: hashed, name, role });
    const token = generateToken(user);
    res.status(201).json({ token, user: { id: user._id, email: user.email, name: user.name, role: user.role } });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user || !await bcrypt.compare(password, user.password)) return res.status(401).json({ error: 'Invalid credentials' });
    const token = generateToken(user);
    res.json({ token, user: { id: user._id, email: user.email, name: user.name, role: user.role } });
});

module.exports = router;