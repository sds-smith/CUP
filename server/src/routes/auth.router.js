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
    done(null, profile)
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

passport.serializeUser((user, done) => {
    const loggedUser = {
        id: user.id,
        displayName: user.displayName,
    }
    done(null, loggedUser)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

const authRouter = express.Router();

authRouter.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
    httpOnly: false
}))

authRouter.use(passport.initialize());
authRouter.use(passport.session());

authRouter.get('/google', 
    passport.authenticate('google', {
        scope: [ 'profile']
    }));

authRouter.get('/google/callback', 
    passport.authenticate('google', {}), 
    (req, res) => {
        const isLoggedIn = req.isAuthenticated() && req.user;
        if (isLoggedIn) {
            return res.redirect(`/`)
        } else {
            return res.redirect('/sign-in/oops')
        };
    });

authRouter.get('/get-session', (req, res) => {
    const user = req.user
    if (user) {
        return res.status(200).json(user)
    }
})

authRouter.get('/logout', (req, res) => {
    res.clearCookie('session')
    return res.clearCookie('session.sig').json({
        msg: 'Logged Out'
    })
});

module.exports = authRouter;