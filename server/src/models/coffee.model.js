const coffees = require('./coffee.mongo');

async function getCoffeeData() {
    return await coffees.find({}); 
}

module.exports = {
    getCoffeeData
}