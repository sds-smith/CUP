const express = require('express');

const friendsActivityRouter = require('./friends-activity.router');
const checkInRouter = require('./check-in.router');
const coffeeDataRouter = require('./coffee.router')

const api = express.Router();

api.use('/friends-activity', friendsActivityRouter)
api.use('/check-in-my-cup', checkInRouter)
api.use('/coffee-data', coffeeDataRouter)

module.exports = api;