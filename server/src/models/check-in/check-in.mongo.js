const mongoose = require('mongoose');

const checkInSchema = new mongoose.Schema({
    id: Number,
    user: Number,
    coffee: Number,
    timeStamp: Date
});

module.exports = mongoose.model('CheckIn', checkInSchema)