const express = require('express');
const cors = require('cors');
const friendsActivityRouter = require('./routes/friends-activity.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use('/friends-activity', friendsActivityRouter)

module.exports = app;