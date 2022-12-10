const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
    id: Number,
    coffeeName: String,
    coffeeRoaster: String,
    singleOrigin: Boolean,
    origin: String,
    process: String,
    roastLevel: String,
    description: String
});

module.exports = mongoose.model('Coffee', coffeeSchema)