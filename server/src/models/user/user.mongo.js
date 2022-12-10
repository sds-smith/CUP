const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    displayName: string
});

module.exports = mongoose.model('User', userSchema)