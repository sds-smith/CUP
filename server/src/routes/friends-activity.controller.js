const {getFriendsActivity} = require('../models/friends-activity.model')

function httpGetFriendsActivity(req, res) {
    return res.status(200).json(getFriendsActivity())
}

module.exports = {
    httpGetFriendsActivity
}