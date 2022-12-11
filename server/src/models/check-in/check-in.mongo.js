const mongoose = require('mongoose');

const checkInSchema = new mongoose.Schema({
    id: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    coffee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coffee'
    },
    extractionMethod: String,
    timeStamp: Date
});

module.exports = mongoose.model('CheckIn', checkInSchema)