const {getCoffeeData, addNewCoffee} = require('../models/coffee.model')

async function httpGetCoffeeData(req, res) {
    return res.status(200).json(await getCoffeeData())
}

async function httpAddNewCoffee(req, res) {
    const coffeeToAdd = req.body
    const coffeeResponse = await addNewCoffee(coffeeToAdd)
    return res.status(coffeeResponse.status).json(coffeeResponse)
}

module.exports = {
    httpGetCoffeeData,
    httpAddNewCoffee
}