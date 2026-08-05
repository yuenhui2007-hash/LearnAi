const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => { try { done(null, await User.findById(id)); } catch (e) { done(e, null); } });
const GOOGLE_CLIENT_ID = ***
const GOOGLE_CLIENT_SECRET = ***
if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET) {
  passport.use(new GoogleStrategy({ clientID: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET, callbackURL: '/api/auth/google/callback' },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ oauthId: profile.id, oauthProvider: 'google' });
        if (!user) user = await User.create({ email: profile.emails[0].value, name: profile.displayName, avatar: profile.photos?.[0]?.value, oauthProvider: 'google', oauthId: profile.id });
        done(null, user);
      } catch (e) { done(e, null); }
    }));
}
module.exports = passport;
