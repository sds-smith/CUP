const checkIns = require('./check-in/check-in.mongo');

async function getFriendsActivity() {
    const feed = await checkIns
        .find({})
        .populate('user')
        .populate('coffee')
        .sort('-timeStamp')
    return feed; 
}

module.exports = {
    getFriendsActivity,
}