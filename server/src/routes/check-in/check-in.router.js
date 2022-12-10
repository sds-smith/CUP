const express = require('express');
const {httpPostCheckIn} = require('./check-in.controller')

const checkInRouter = express.Router();

checkInRouter.post('/', httpPostCheckIn)

module.exports = checkInRouter