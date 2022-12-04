const path = require('path');
const express = require('express');
const cors = require('cors');
const friendsActivityRouter = require('./routes/friends-activity.router');
const checkInRouter = require('./routes/check-in.router');
const coffeeDataRouter = require('./routes/coffee.router')
const {getCoffeeData} = require('./models/coffee.model')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public' )))

app.use('/friends-activity', friendsActivityRouter)
app.use('/check-in-my-cup', checkInRouter)
app.use('/coffee-data', coffeeDataRouter)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app;