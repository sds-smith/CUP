const express = require('express');

const authRouter = require('./auth.router');
const friendsActivityRouter = require('./friends-activity.router');
const userRouter = require('./user/user.router');
const checkInRouter = require('./check-in/check-in.router');
const coffeeDataRouter = require('./coffee/coffee.router');

const api = express.Router();

api.use('/auth', authRouter)
api.use('/friends-activity', friendsActivityRouter)
api.use('/users', userRouter)
api.use('/check-in-my-cup', checkInRouter)
api.use('/coffee-data', coffeeDataRouter)

module.exports = api;