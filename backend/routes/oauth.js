/**
 * OAuth 2.0 Routes for Google and Apple Sign-In
 * Implements secure authorization code flow with PKCE
 */

const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { users, activityLogs, isMongo, User, ActivityLog } = require('../config/database');
const { generateToken, COOKIE_OPTIONS } = require('./auth');
const router = express.Router();

// In-memory store for OAuth state (use Redis in production)
const oauthState = new Map();
const oauthCodeVerifier = new Map();

// Clean up expired state entries every 10 minutes
setInterval(() => {
    const now = Date.now();
    for (const [key, val] of oauthState) {
        if (now - val.createdAt > 10 * 60 * 1000) {
            oauthState.delete(key);
            oauthCodeVerifier.delete(key);
        }
    }
}, 60000);

/**
 * Generate PKCE code verifier and challenge
 */
function generatePKCE() {
    const verifier = crypto.randomBytes(32).toString('base64url');
    const challenge = crypto.createHash('sha256').update(verifier).digest('base64url');
    return { verifier, challenge };
}

/**
 * Validate Google ID Token
 */
async function validateGoogleToken(idToken) {
    try {
        // Fetch Google's public keys
        const response = await fetch('https://www.googleapis.com/oauth2/v3/certs');
        const { keys } = await response.json();
        
        // Decode token header to get kid
        const header = JSON.parse(Buffer.from(idToken.split('.')[0], 'base64url').toString());
        const key = keys.find(k => k.kid === header.kid);
        if (!key) throw new Error('Invalid token signature');
        
        // Verify token
        const payload = jwt.verify(idToken, key, { 
            algorithms: ['RS256'],
            issuer: ['https://accounts.google.com', 'accounts.google.com'],
            audience: process.env.GOOGLE_CLIENT_ID
        });
        
        return {
            id: payload.sub,
            email: payload.email,
            name: payload.name || payload.given_name || payload.email.split('@')[0],
            picture: payload.picture,
            provider: 'google'
        };
    } catch (err) {
        console.error('Google token validation error:', err);
        throw new Error('Invalid Google token');
    }
}

/**
 * Validate Apple ID Token
 */
async function validateAppleToken(idToken) {
    try {
        // Fetch Apple's public keys
        const response = await fetch('https://appleid.apple.com/auth/keys');
        const { keys } = await response.json();
        
        // Decode token header to get kid
        const header = JSON.parse(Buffer.from(idToken.split('.')[0], 'base64url').toString());
        const key = keys.find(k => k.kid === header.kid);
        if (!key) throw new Error('Invalid token signature');
        
        // Verify token
        const payload = jwt.verify(idToken, key, {
            algorithms: ['RS256'],
            issuer: 'https://appleid.apple.com',
            audience: process.env.APPLE_CLIENT_ID
        });
        
        return {
            id: payload.sub,
            email: payload.email,
            name: payload.name || payload.email.split('@')[0],
            provider: 'apple'
        };
    } catch (err) {
        console.error('Apple token validation error:', err);
        throw new Error('Invalid Apple token');
    }
}

/**
 * Find or create user from OAuth data
 */
async function findOrCreateOAuthUser(oauthData) {
    const { id, email, name, provider } = oauthData;
    
    if (isMongo && User) {
        // Check for existing user with this OAuth ID
        let user = await User.findOne({ [`oauth.${provider}.id`]: id });
        if (user) return user;
        
        // Check for existing user with same email
        user = await User.findOne({ email });
        if (user) {
            // Link OAuth to existing account
            user.oauth = user.oauth || {};
            user.oauth[provider] = { id, linkedAt: new Date() };
            await user.save();
            return user;
        }
        
        // Create new user
        user = new User({
            email,
            name,
            role: 'student',
            oauth: { [provider]: { id, linkedAt: new Date() } },
            createdAt: new Date()
        });
        await user.save();
        return user;
    }
    
    // In-memory fallback
    let user = Array.from(users.values()).find(u => 
        u.oauth && u.oauth[provider] && u.oauth[provider].id === id
    );
    if (user) return user;
    
    user = Array.from(users.values()).find(u => u.email === email);
    if (user) {
        user.oauth = user.oauth || {};
        user.oauth[provider] = { id, linkedAt: new Date().toISOString() };
        return user;
    }
    
    const newId = uuidv4();
    const newUser = {
        id: newId,
        email,
        name,
        role: 'student',
        oauth: { [provider]: { id, linkedAt: new Date().toISOString() } },
        createdAt: new Date().toISOString()
    };
    users.set(newId, newUser);
    return newUser;
}

// ===== GOOGLE OAUTH =====

/**
 * Initiate Google OAuth flow
 */
router.get('/google', (req, res) => {
    if (!process.env.GOOGLE_CLIENT_ID) {
        return res.status(503).json({ error: 'Google OAuth not configured' });
    }
    
    const state = crypto.randomBytes(32).toString('hex');
    const { verifier, challenge } = generatePKCE();
    
    oauthState.set(state, { 
        provider: 'google', 
        createdAt: Date.now(),
        redirectUri: `${req.protocol}://${req.get('host')}/api/oauth/google/callback`
    });
    oauthCodeVerifier.set(state, verifier);
    
    const params = new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        redirect_uri: `${req.protocol}://${req.get('host')}/api/oauth/google/callback`,
        response_type: 'code',
        scope: 'openid email profile',
        state: state,
        code_challenge: challenge,
        code_challenge_method: 'S256',
        access_type: 'online',
        prompt: 'select_account'
    });
    
    res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`);
});

/**
 * Google OAuth callback
 */
router.get('/google/callback', async (req, res) => {
    const { code, state, error } = req.query;
    
    if (error) {
        return res.redirect('/login.html?error=' + encodeURIComponent('Google authentication failed'));
    }
    
    if (!state || !oauthState.has(state)) {
        return res.redirect('/login.html?error=' + encodeURIComponent('Invalid or expired state parameter'));
    }
    
    const stateData = oauthState.get(state);
    const codeVerifier = oauthCodeVerifier.get(state);
    oauthState.delete(state);
    oauthCodeVerifier.delete(state);
    
    try {
        // Exchange code for tokens
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                code,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: stateData.redirectUri,
                grant_type: 'authorization_code',
                code_verifier: codeVerifier
            })
        });
        
        const tokens = await tokenResponse.json();
        if (!tokens.id_token) {
            throw new Error('No ID token received from Google');
        }
        
        // Validate ID token
        const oauthData = await validateGoogleToken(tokens.id_token);
        
        // Find or create user
        const user = await findOrCreateOAuthUser(oauthData);
        
        // Generate JWT and set cookie
        const userId = user._id ? user._id.toString() : user.id;
        const token = generateToken({ id: userId, email: user.email, role: user.role });
        res.cookie('token', token, COOKIE_OPTIONS);
        
        // Log activity
        if (isMongo && ActivityLog) {
            await new ActivityLog({
                userId: userId,
                userName: user.name,
                userEmail: user.email,
                action: 'oauth_login_google',
                timestamp: new Date(),
                ip: req.ip || req.connection.remoteAddress
            }).save();
        }
        
        res.redirect('/dashboard.html');
    } catch (err) {
        console.error('Google OAuth callback error:', err);
        res.redirect('/login.html?error=' + encodeURIComponent('Authentication failed'));
    }
});

// ===== APPLE OAUTH =====

/**
 * Initiate Apple OAuth flow
 */
router.get('/apple', (req, res) => {
    if (!process.env.APPLE_CLIENT_ID) {
        return res.status(503).json({ error: 'Apple OAuth not configured' });
    }
    
    const state = crypto.randomBytes(32).toString('hex');
    const { verifier, challenge } = generatePKCE();
    
    oauthState.set(state, { 
        provider: 'apple', 
        createdAt: Date.now(),
        redirectUri: `${req.protocol}://${req.get('host')}/api/oauth/apple/callback`
    });
    oauthCodeVerifier.set(state, verifier);
    
    const params = new URLSearchParams({
        client_id: process.env.APPLE_CLIENT_ID,
        redirect_uri: `${req.protocol}://${req.get('host')}/api/oauth/apple/callback`,
        response_type: 'code id_token',
        scope: 'name email',
        state: state,
        code_challenge: challenge,
        code_challenge_method: 'S256',
        response_mode: 'form_post'
    });
    
    res.redirect(`https://appleid.apple.com/auth/authorize?${params.toString()}`);
});

/**
 * Apple OAuth callback (POST due to response_mode=form_post)
 */
router.post('/apple/callback', async (req, res) => {
    const { code, state, id_token, error } = req.body;
    
    if (error) {
        return res.redirect('/login.html?error=' + encodeURIComponent('Apple authentication failed'));
    }
    
    if (!state || !oauthState.has(state)) {
        return res.redirect('/login.html?error=' + encodeURIComponent('Invalid or expired state parameter'));
    }
    
    const stateData = oauthState.get(state);
    const codeVerifier = oauthCodeVerifier.get(state);
    oauthState.delete(state);
    oauthCodeVerifier.delete(state);
    
    try {
        let oauthData;
        
        if (id_token) {
            // Use ID token directly
            oauthData = await validateAppleToken(id_token);
        } else if (code) {
            // Exchange code for tokens
            const clientSecret = jwt.sign({
                iss: process.env.APPLE_TEAM_ID,
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000) + 300,
                aud: 'https://appleid.apple.com',
                sub: process.env.APPLE_CLIENT_ID
            }, process.env.APPLE_PRIVATE_KEY, { algorithm: 'ES256', keyid: process.env.APPLE_KEY_ID });
            
            const tokenResponse = await fetch('https://appleid.apple.com/auth/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    code,
                    client_id: process.env.APPLE_CLIENT_ID,
                    client_secret: clientSecret,
                    redirect_uri: stateData.redirectUri,
                    grant_type: 'authorization_code',
                    code_verifier: codeVerifier
                })
            });
            
            const tokens = await tokenResponse.json();
            if (!tokens.id_token) {
                throw new Error('No ID token received from Apple');
            }
            
            oauthData = await validateAppleToken(tokens.id_token);
        } else {
            throw new Error('No authentication code or token received');
        }
        
        // Find or create user
        const user = await findOrCreateOAuthUser(oauthData);
        
        // Generate JWT and set cookie
        const userId = user._id ? user._id.toString() : user.id;
        const token = generateToken({ id: userId, email: user.email, role: user.role });
        res.cookie('token', token, COOKIE_OPTIONS);
        
        // Log activity
        if (isMongo && ActivityLog) {
            await new ActivityLog({
                userId: userId,
                userName: user.name,
                userEmail: user.email,
                action: 'oauth_login_apple',
                timestamp: new Date(),
                ip: req.ip || req.connection.remoteAddress
            }).save();
        }
        
        res.redirect('/dashboard.html');
    } catch (err) {
        console.error('Apple OAuth callback error:', err);
        res.redirect('/login.html?error=' + encodeURIComponent('Authentication failed'));
    }
});

/**
 * Link OAuth account to existing user
 */
router.post('/link', async (req, res) => {
    const { provider, token: idToken } = req.body;
    const userId = req.user?.id || req.user?._id?.toString();
    
    if (!userId) {
        return res.status(401).json({ error: 'Authentication required' });
    }
    
    try {
        let oauthData;
        if (provider === 'google') {
            oauthData = await validateGoogleToken(idToken);
        } else if (provider === 'apple') {
            oauthData = await validateAppleToken(idToken);
        } else {
            return res.status(400).json({ error: 'Invalid provider' });
        }
        
        if (isMongo && User) {
            const user = await User.findById(userId);
            if (!user) return res.status(404).json({ error: 'User not found' });
            
            user.oauth = user.oauth || {};
            user.oauth[provider] = { id: oauthData.id, linkedAt: new Date() };
            await user.save();
        } else {
            const user = users.get(userId);
            if (!user) return res.status(404).json({ error: 'User not found' });
            
            user.oauth = user.oauth || {};
            user.oauth[provider] = { id: oauthData.id, linkedAt: new Date().toISOString() };
        }
        
        res.json({ success: true, message: `${provider} account linked successfully` });
    } catch (err) {
        console.error('OAuth link error:', err);
        res.status(400).json({ error: 'Failed to link account' });
    }
});

/**
 * Unlink OAuth account
 */
router.post('/unlink', async (req, res) => {
    const { provider } = req.body;
    const userId = req.user?.id || req.user?._id?.toString();
    
    if (!userId) {
        return res.status(401).json({ error: 'Authentication required' });
    }
    
    try {
        if (isMongo && User) {
            const user = await User.findById(userId);
            if (!user) return res.status(404).json({ error: 'User not found' });
            
            if (user.oauth && user.oauth[provider]) {
                delete user.oauth[provider];
                await user.save();
            }
        } else {
            const user = users.get(userId);
            if (!user) return res.status(404).json({ error: 'User not found' });
            
            if (user.oauth && user.oauth[provider]) {
                delete user.oauth[provider];
            }
        }
        
        res.json({ success: true, message: `${provider} account unlinked successfully` });
    } catch (err) {
        console.error('OAuth unlink error:', err);
        res.status(400).json({ error: 'Failed to unlink account' });
    }
});

module.exports = router;
