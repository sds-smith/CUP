const {getCoffeeData} = require('../models/coffee.model')

async function httpGetCoffeeData(req, res) {
    return res.status(200).json(await getCoffeeData())
}

module.exports = {
    httpGetCoffeeData
}