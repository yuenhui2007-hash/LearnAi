const express = require('express');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const passport = require('passport');
const User = require('../models/User');
const { generateToken } = require('../middleware/auth');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, name, phone, role = 'student' } = req.body;
  if (!email || !password || !name) return res.status(400).json({ error: 'Email, password, name required' });
  if (!validator.isEmail(email)) return res.status(400).json({ error: 'Invalid email' });
  if (password.length < 6) return res.status(400).json({ error: 'Password 6+ chars' });
  if (await User.findOne({ email })) return res.status(409).json({ error: 'Email exists' });
  const hashed = await bcrypt.hash(password, 12);
  const user = await User.create({ email: email.toLowerCase(), password: hashed, name, phone, role, oauthProvider: 'local' });
  res.status(201).json({ token: generateToken(user), user: { id: user._id, email: user.email, name: user.name, phone: user.phone, role: user.role } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user || !user.password || !await bcrypt.compare(password, user.password)) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ token: generateToken(user), user: { id: user._id, email: user.email, name: user.name, phone: user.phone, role: user.role } });
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login.html?error=google_failed' }), (req, res) => {
  const token = generateToken(req.user);
  res.redirect(`/login.html?token=${token}&name=${encodeURIComponent(req.user.name)}`);
});

router.get('/apple', (req, res) => res.json({ message: 'Apple Sign In — configure APPLE_CLIENT_ID' }));
module.exports = router;
