const {getCoffeeData} = require('../models/coffee.model')

function httpGetCoffeeData(req, res) {
    return res.status(200).json(getCoffeeData())
}

module.exports = {
    httpGetCoffeeData
}