/**
 * LearnAI — Authentication Middleware
 */

const jwt = require('jsonwebtoken');
const { users } = require('../config/database');

const JWT_SECRET = process.env.JWT_SECRET || 'learnai-dev-secret-change-in-production';

function authenticate(req, res, next) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = users.get(decoded.id) || decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
}

function generateToken(user) {
    return jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
}

module.exports = { authenticate, generateToken, JWT_SECRET };
