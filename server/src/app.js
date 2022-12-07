const path = require('path');
const express = require('express');
const helmet = require('helmet');
// const cors = require('cors');
const api = require('./routes/api')

const app = express();

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            "connect-src": ["'self'", "https://accounts.google.com"]
        }
    }
}));
// app.use(cors({
//     origin: 'http://localhost:3000'
// }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public' )))

app.use('/v1', api)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app;