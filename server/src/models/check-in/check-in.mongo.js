const mongoose = require('mongoose');

const checkInSchema = new mongoose.Schema({
    id: Number,
    user: Number,
    coffee: Number,
    extractionMethod: String,
    timeStamp: Date
});

module.exports = mongoose.model('CheckIn', checkInSchema)