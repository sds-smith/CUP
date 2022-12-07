const fs = require('fs');
const https = require('https');
require('dotenv').config();
const {mongoConnect} = require('./services/mongo');
const {loadCoffeeData} = require('./models/coffee.model')

const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app);

async function startServer() {
    await mongoConnect();
    await loadCoffeeData()

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}

startServer()