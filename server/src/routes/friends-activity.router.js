const express = require('express');
const {httpGetFriendsActivity} = require('./friends-activity.controller')

const friendsActivityRouter = express.Router();

friendsActivityRouter.get('/', httpGetFriendsActivity);

module.exports = friendsActivityRouter;