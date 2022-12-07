const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');

require('dotenv').config();

const config = {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
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

const authRouter = express.Router();
authRouter.use(passport.initialize());


authRouter.get('/google', 
    passport.authenticate('google', {
        scope: [ 'profile']
    }));

authRouter.get('/google/callback', 
    passport.authenticate('google', {
        failureRedirect: '/failure',
        successRedirect: '/',
        session: false
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