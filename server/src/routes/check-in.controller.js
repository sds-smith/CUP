const {
    addNewCheckIn
} = require('../models/friends-activity.model')

function httpPostCheckIn(req, res) {
    const checkIn = req.body

    if (!checkIn.friend || !checkIn.coffeeRoaster || !checkIn.coffeeName || !checkIn.extractionMethod) {
        return res.status(400).json({
            error: "Missing required check-in data"
        })
    }

    return res.status(201).json(addNewCheckIn(checkIn))
}

module.exports = {
    httpPostCheckIn
}