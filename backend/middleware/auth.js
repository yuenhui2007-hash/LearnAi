const jwt = require('jsonwebtoken');
const crypto = require('crypto');
let JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) { JWT_SECRET = crypto.randomBytes(32).toString('hex'); console.warn('JWT_SECRET not set'); }
module.exports = { authenticate: (req,res,next) => { const t = req.headers.authorization?.replace('Bearer ',''); if(!t) return res.status(401).json({error:'Access denied'}); try { req.user = jwt.verify(t, JWT_SECRET); next(); } catch { res.status(401).json({error:'Invalid token'}); } }, generateToken: (u) => jwt.sign({id:u._id||u.id, email:u.email, role:u.role}, JWT_SECRET, {expiresIn:'7d'}) };
