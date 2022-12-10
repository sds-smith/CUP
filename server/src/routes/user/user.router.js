const express = require('express');
const {
    httpFindUserById,
    httpGetUsers,
    httpAddNewUser
} = require('./user.controller');

const userRouter = express.Router();

userRouter.get('/:userId', httpFindUserById);
userRouter.get('/', httpGetUsers)
userRouter.post('/', httpAddNewUser)

module.exports = userRouter;