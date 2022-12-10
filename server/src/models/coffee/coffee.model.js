const axios = require('axios')
const coffees = require('./coffee.mongo');

const DEFAULT_ROASTER_ID = 0;
const DEFAULT_COFFEE_ID = 0;

const THIRD_WAVE_COFFEE_BASE_URL = 'https://thirdwavecoffeebase.com/';

async function populateCoffees() {
    const roastersResponse = await axios.get(`${THIRD_WAVE_COFFEE_BASE_URL}/roasters`)
    const roasters = roastersResponse.data.roasters
    let counter = 1
    roasters.forEach(async (roaster) => {
        const individualRoasterResponse = await axios.get(`${THIRD_WAVE_COFFEE_BASE_URL}/roasters/${roaster}`)
        const {name, coffees} = individualRoasterResponse.data
        coffees.forEach(async (coffee) => {
            const singleOrigin = coffee.type === 'single origin'
            const coffeeToAdd = {
                coffeeName: coffee.name,
                coffeeRoaster: name,
                singleOrigin,
                origin: coffee.origin,
                process: coffee.process,
                roastLevel: coffee.roastLevel,
                description: coffee.description
            }
            await addNewCoffee(coffeeToAdd)
            console.log(`${coffee.name} added ${counter} total`)
            counter++
        })
    })
}

async function findCoffee(filter) {
    return await coffees.findOne(filter)
}

async function loadCoffeeData() {
    const firstCoffee = await findCoffee({
        coffeeRoaster: 'Sightglass Coffee',
        coffeeName: 'Worka Chelbessa, Yirgacheffe'
      })
    if (firstCoffee) {
        console.log('Coffee data already loaded');
    } else {
        console.log('Populating coffees')
        await populateCoffees();
    }
}

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

async function addNewCoffeeFromClient(coffeeToAdd) {
    const coffeeQuery = await coffees.find(coffeeToAdd)
    if (coffeeQuery.length) {
        return {
            ok: false,
            status: 409,
            message: 'Coffee already exists in database. Not added.'
        }
    }

    return await addNewCoffee(newCoffeeToAdd)
}

module.exports = {
    loadCoffeeData,
    getCoffeeData,
    addNewCoffeeFromClient
}