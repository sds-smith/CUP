const {getFriendsActivity} = require('../models/friends-activity.model')

async function httpGetFriendsActivity(req, res) {
    return res.status(200).json(await getFriendsActivity())
}

module.exports = {
    httpGetFriendsActivity
}