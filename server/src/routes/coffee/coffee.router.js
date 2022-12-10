const express = require('express');
const {httpGetCoffeeData, httpAddNewCoffee} = require('./coffee.controller');

const coffeeDataRouter = express.Router();

coffeeDataRouter.get('/', httpGetCoffeeData);
coffeeDataRouter.post('/', httpAddNewCoffee)

module.exports = coffeeDataRouter;