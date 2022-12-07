const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const cookieSession = require('cookie-session');

require('dotenv').config();

const config = {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2
}

const AUTH_OPTIONS = {
    callbackURL: '/v1/auth/google/callback',
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET
}

function verifyCallback(accessToken, refreshToken, profile, done) {
    console.log("Google profile", profile)
    done(null, profile)
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

passport.serializeUser((user, done) => {
    done(null, {
        id: user.id,
        displayName: user.displayName
    })
})

passport.deserializeUser((obj, done) => {
    done(null, obj)
})

const authRouter = express.Router();

authRouter.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2]
}))

authRouter.use(passport.initialize());
authRouter.use(passport.session())


authRouter.get('/google', 
    passport.authenticate('google', {
        scope: [ 'profile']
    }));

authRouter.get('/google/callback', 
    passport.authenticate('google', {
        failureRedirect: '/failure',
        successRedirect: '/',
    }), 
    (req, res) => {
        console.log('Google callback')
    });

authRouter.get('/logout', (req, res) => {
    return res.status(200).json({
        message: 'user is logged out'
    })
});

authRouter.get('/failure', (req, res) => {
    return res.send('Failed to log in');
});

module.exports = authRouter;