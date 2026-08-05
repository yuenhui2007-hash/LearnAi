const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const { apiLimiter, authLimiter, securityHeaders, sanitizeInput } = require('./middleware/security');

const app = express();
const PORT = process.env.PORT || 10000;

// Security middleware
app.use(securityHeaders);
app.use(sanitizeInput);
app.use(cors({ origin: process.env.CORS_ORIGIN || '*', credentials: true }));
app.use(express.json({ limit: '1mb' }));

// Logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path} ${req.ip}`);
    next();
});

// Rate limiting
app.use('/api/', apiLimiter);
app.use('/api/auth/', authLimiter);

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/learnai';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB error:', err.message));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/materials', require('./routes/materials'));
app.use('/api/study', require('./routes/study'));
app.use('/api/tutor', require('./routes/tutor'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/workbooks', require('./routes/workbooks'));

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'LearnAI', timestamp: new Date().toISOString() });
});

app.use(express.static(path.join(__dirname, '..')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'index.html')));

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal error' });
});

app.listen(PORT, '0.0.0.0', () => console.log(`🎓 LearnAI running on port ${PORT}`));
