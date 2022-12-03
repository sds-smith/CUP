const express = require('express');
const cors = require('cors');
const friendsActivityRouter = require('./routes/friends-activity.router');
const checkInRouter = require('./routes/check-in.router')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())

app.use('/friends-activity', friendsActivityRouter)
app.use('/check-in-my-cup', checkInRouter)

module.exports = app;