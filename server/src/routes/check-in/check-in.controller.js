const {
    addNewCheckIn
} = require('../../models/check-in/check-in.model')

function httpPostCheckIn(req, res) {
    const checkIn = req.body

    if (!checkIn.user || !checkIn.coffee || !checkIn.timeStamp || !checkIn.extractionMethod) {
        return res.status(400).json({
            error: "Missing required check-in data"
        })
    }
    return res.status(201).json(addNewCheckIn(checkIn))
}

module.exports = {
    httpPostCheckIn
}