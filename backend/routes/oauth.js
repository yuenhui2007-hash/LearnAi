const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
    maxAge: 7 * 24 * 60 * 60 * 1000
};

// Google OAuth — verify ID token
router.post('/google', async (req, res) => {
    const { credential } = req.body;
    if (!credential) return res.status(400).json({ error: 'No credential provided' });

    try {
        // Verify Google ID token
        const { OAuth2Client } = require('google-auth-library');
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        const payload = ticket.getPayload();
        const email = payload.email;
        const name = payload.name || email.split('@')[0];
        const googleId = payload.sub;

        if (!email) return res.status(400).json({ error: 'No email in Google token' });

        let user;
        if (isMongo && User) {
            user = await User.findOne({ email });
            if (!user) {
                user = new User({
                    email,
                    name,
                    authProvider: 'google',
                    authProviderId: googleId,
                    role: 'student'
                });
                await user.save();
            } else if (user.authProvider !== 'google') {
                // Link existing local account to Google
                user.authProvider = 'google';
                user.authProviderId = googleId;
                await user.save();
            }
            const userId = user._id.toString();
            const token = generateToken({ id: userId, email: user.email, role: user.role });
            res.cookie('token', token, COOKIE_OPTIONS);
            return res.json({
                success: true,
                user: { id: userId, email: user.email, name: user.name, role: user.role },
                token
            });
        }

        // In-memory fallback
        user = Array.from(users.values()).find(u => u.email === email);
        if (!user) {
            const id = uuidv4();
            user = { id, email, name, authProvider: 'google', authProviderId: googleId, role: 'student', createdAt: new Date().toISOString() };
            users.set(id, user);
        }
        const token = generateToken({ id: user.id, email: user.email, role: user.role });
        res.cookie('token', token, COOKIE_OPTIONS);
        res.json({ success: true, user: { id: user.id, email: user.email, name: user.name, role: user.role }, token });
    } catch (err) {
        console.error('Google OAuth error:', err.message);
        res.status(401).json({ error: 'Google authentication failed' });
    }
});

// Apple OAuth — redirect flow
router.get('/apple', (req, res) => {
    const clientId = process.env.APPLE_CLIENT_ID;
    const redirectUri = process.env.APPLE_REDIRECT_URI || (process.env.API_BASE + '/auth/apple/callback');
    const state = Buffer.from(JSON.stringify({
        redirect: req.query.redirect || 'dashboard.html',
        nonce: uuidv4()
    })).toString('base64');

    const url = 'https://appleid.apple.com/auth/authorize?' +
        'response_type=code&id_token&' +
        'client_id=' + encodeURIComponent(clientId) + '&' +
        'redirect_uri=' + encodeURIComponent(redirectUri) + '&' +
        'scope=name%20email&' +
        'state=' + encodeURIComponent(state);
    res.redirect(url);
});

// Apple OAuth callback
router.post('/apple/callback', async (req, res) => {
    const { code, id_token, state } = req.body;
    if (!code && !id_token) return res.status(400).json({ error: 'No authorization code or token' });

    try {
        let email, name, appleId;

        if (id_token) {
            // Verify Apple ID token
            const appleSignin = require('apple-signin-auth');
            const payload = await appleSignin.verifyIdToken(id_token, {
                audience: process.env.APPLE_CLIENT_ID,
                ignoreExpiration: false
            });
            email = payload.email;
            appleId = payload.sub;
        } else if (code) {
            // Exchange code for tokens
            const appleSignin = require('apple-signin-auth');
            const tokens = await appleSignin.getAuthorizationToken(code, {
                clientID: process.env.APPLE_CLIENT_ID,
                clientSecret: process.env.APPLE_CLIENT_SECRET,
                redirectUri: process.env.APPLE_REDIRECT_URI
            });
            const payload = await appleSignin.verifyIdToken(tokens.id_token, {
                audience: process.env.APPLE_CLIENT_ID
            });
            email = payload.email;
            appleId = payload.sub;
        }

        if (!email) return res.status(400).json({ error: 'No email from Apple' });

        let user;
        if (isMongo && User) {
            user = await User.findOne({ email });
            if (!user) {
                user = new User({
                    email,
                    name: name || email.split('@')[0],
                    authProvider: 'apple',
                    authProviderId: appleId,
                    role: 'student'
                });
                await user.save();
            }
            const userId = user._id.toString();
            const token = generateToken({ id: userId, email: user.email, role: user.role });
            res.cookie('token', token, COOKIE_OPTIONS);
            return res.json({
                success: true,
                user: { id: userId, email: user.email, name: user.name, role: user.role },
                token
            });
        }

        // In-memory
        user = Array.from(users.values()).find(u => u.email === email);
        if (!user) {
            const id = uuidv4();
            user = { id, email, name: name || email.split('@')[0], authProvider: 'apple', authProviderId: appleId, role: 'student', createdAt: new Date().toISOString() };
            users.set(id, user);
        }
        const token = generateToken({ id: user.id, email: user.email, role: user.role });
        res.cookie('token', token, COOKIE_OPTIONS);
        res.json({ success: true, user: { id: user.id, email: user.email, name: user.name, role: user.role }, token });
    } catch (err) {
        console.error('Apple OAuth error:', err.message);
        res.status(401).json({ error: 'Apple authentication failed' });
    }
});

module.exports = router;
