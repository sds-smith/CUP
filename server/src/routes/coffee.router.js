const express = require('express');
const {httpGetCoffeeData} = require('./coffee.controller');

const coffeeDataRouter = express.Router();

coffeeDataRouter.get('/', httpGetCoffeeData);

module.exports = coffeeDataRouter;