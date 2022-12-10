const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    displayName: String
});

module.exports = mongoose.model('User', userSchema)