const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100, message: { error: 'Too many requests' } });
const authLimiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 10, message: { error: 'Too many auth attempts' } });
module.exports = { apiLimiter, authLimiter };
