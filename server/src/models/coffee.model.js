const coffees = require('./coffee.mongo');

const DEFAULT_COFFEE_ID = 0

async function getCoffeeData() {
    return await coffees.find({}); 
}

async function getNextCoffeeId() {
    const latestCoffee = await coffees
        .findOne()
        .sort('-id')
    if (!latestCoffee) {
        return DEFAULT_COFFEE_ID
    }
    return latestCoffee.id + 1
}

async function addNewCoffee(coffeeToAdd) {
    const coffeeQuery = await coffees.find(coffeeToAdd)
    if (coffeeQuery.length) {
        return {
            ok: false,
            status: 409,
            message: 'Coffee already exists in database. Not added.'
        }
    }
    const nextId = await getNextCoffeeId()
    const newCoffeeToAdd = Object.assign(coffeeToAdd, {
        id: nextId
    })
    const newCoffee = new coffees(newCoffeeToAdd);
    try {
        await newCoffee.save();
        return {
            ok: true,
            status: 201,
            message: 'coffee saved to database'
        }
    } catch (err) {
        return err
    }

}

// addNewCoffee({
//     "id": 4,
//     "coffeeName": "test",
//     "coffeeRoaster": "Modern Times Coffee",
//     "singleOrigin": true,
//     "origin": "Rwanda District Muve",
//     "cultivar": "",
//     "process": "Washed",
//     "roastLevel": "light",
//     "description": "If you’re into incredibly tasty washed-process coffee from excellent producers, you’re in for a treat. Hailing from the Nyakibanda region of Rwanda’s Huye District, this coffee boasts a marvelous profile with notes of white grape, vibrant lemon, and green tea. We’re pretty excited about it"
// })
// 
// addNewCoffee({
    // "id": 5,
    // "coffeeName": "Old Dank Nic",
    // "coffeeRoaster": "Modern Times Coffee",
    // "singleOrigin": true,
    // "origin": "Rwanda District Muve",
    // "cultivar": "",
    // "process": "Washed",
    // "roastLevel": "light",
    // "description": "If you’re into incredibly tasty washed-process coffee from excellent producers, you’re in for a treat. Hailing from the Nyakibanda region of Rwanda’s Huye District, this coffee boasts a marvelous profile with notes of white grape, vibrant lemon, and green tea. We’re pretty excited about it"
// })
module.exports = {
    getCoffeeData,
    addNewCoffee
}