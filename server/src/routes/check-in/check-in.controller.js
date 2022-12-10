const {
    addNewCheckIn
} = require('../../models/check-in/check-in.model')

async function httpPostCheckIn(req, res) {
    const checkIn = req.body

    const checkInResponse = await addNewCheckIn(checkIn)
    console.log(checkInResponse)
    return res.status(checkInResponse.status).json(checkInResponse)
}

module.exports = {
    httpPostCheckIn
}