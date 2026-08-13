/**
 * LearnAI — Authentication Middleware
 * Supports both MongoDB and in-memory database
 */

const jwt = require('jsonwebtoken');
const { users, isMongo, User } = require('../config/database');

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is required');
}

async function authenticate(req, res, next) {
    const token = req.headers.authorization?.replace('Bearer ', '') || req.cookies?.token;
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        let user;
        if (isMongo && User) {
            user = await User.findById(decoded.id).select('-password');
            if (user) user = { id: user._id.toString(), ...user.toObject() };
        }
        if (!user) {
            user = users.get(decoded.id) || decoded;
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
}

function generateToken(user) {
    return jwt.sign({ id: user.id || user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
}

module.exports = { authenticate, generateToken, JWT_SECRET };
