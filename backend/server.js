/**
 * LearnAI Platform — Production Backend Server
 * Express API with auth, page-level protection, rate limiting, security headers
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

const { authenticate, JWT_SECRET } = require('./middleware/auth');

// ===== Security Headers =====
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'"],
            frameAncestors: ["'none'"],
            baseUri: ["'self'"],
            formAction: ["'self'"]
        }
    },
    crossOriginEmbedderPolicy: false
}));

// ===== CORS =====
app.use(cors({
    origin: process.env.FRONTEND_URL || true,
    credentials: true
}));

// ===== Rate Limiting =====
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: { error: 'Too many requests, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false
});
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'Too many login attempts. Please try again later.' }
});
app.use('/api/', apiLimiter);
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);

// ===== Body Parsing =====
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ===== Request Logging =====
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// ===== API Routes =====
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', authenticate, require('./routes/users'));
app.use('/api/materials', authenticate, require('./routes/materials'));
app.use('/api/study', authenticate, require('./routes/study'));
app.use('/api/tutor', authenticate, require('./routes/tutor'));
app.use('/api/analytics', authenticate, require('./routes/analytics'));
app.use('/api/workbooks', authenticate, require('./routes/workbooks'));
app.use('/api/admin', authenticate, require('./routes/admin'));
app.use('/api/certificates', authenticate, require('./routes/certificates'));

// ===== Auth Status Endpoint (for frontend) =====
app.get('/api/auth/me', authenticate, (req, res) => {
    res.json({ user: { id: req.user.id, email: req.user.email, name: req.user.name, role: req.user.role } });
});

// ===== Logout (clear cookie) =====
app.post('/api/auth/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ success: true });
});

// ===== Health Check =====
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', version: '1.0.0', timestamp: new Date().toISOString() });
});

// ===== Static Frontend =====
// Block sensitive files
app.use((req, res, next) => {
    const blocked = ['package.json', '.env', '.env.example', '.gitignore'];
    if (blocked.includes(req.path.split('/').pop())) {
        return res.status(403).send('Forbidden');
    }
    next();
});

// Serve static files
app.use(express.static(path.join(__dirname, '..')));

// ===== Page-Level Protection Middleware =====
const PROTECTED_PAGES = [
    '/dashboard.html',
    '/planner.html',
    '/study-tools.html',
    '/exam-practice.html',
    '/flashcards.html',
    '/mock-exam.html',
    '/ai-marker.html',
    '/quiz.html'
];
const ADMIN_PAGES = [
    '/admin.html',
    '/sys-panel.html',
    '/dashboard-admin-9x7k.html'
];

function pageProtect(req, res, next) {
    const page = req.path;

    // Admin pages: require valid JWT + admin role
    if (ADMIN_PAGES.includes(page)) {
        const token = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');
        if (!token) return res.status(403).send('<h1>403 Forbidden</h1><p>Admin access required. <a href="/login.html">Login</a></p>');
        try {
            const jwt = require('jsonwebtoken');
            const decoded = jwt.verify(token, JWT_SECRET);
            if (decoded.role !== 'admin') {
                return res.status(403).send('<h1>403 Forbidden</h1><p>Admin role required.</p>');
            }
            return next();
        } catch (err) {
            return res.status(403).send('<h1>403 Forbidden</h1><p>Invalid session. <a href="/login.html">Login</a></p>');
        }
    }

    // Protected pages: require valid JWT (cookie-based)
    if (PROTECTED_PAGES.includes(page)) {
        const token = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            return res.redirect('/login.html?redirect=' + encodeURIComponent(req.originalUrl));
        }
        try {
            const jwt = require('jsonwebtoken');
            jwt.verify(token, JWT_SECRET);
            return next();
        } catch (err) {
            return res.redirect('/login.html?redirect=' + encodeURIComponent(req.originalUrl));
        }
    }

    next();
}

// Apply page protection BEFORE serving HTML files
app.get('*.html', pageProtect);

// ===== SPA Catch-All =====
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// ===== Error Handler =====
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`LearnAI Server running on port ${PORT}`);
});

module.exports = app;
