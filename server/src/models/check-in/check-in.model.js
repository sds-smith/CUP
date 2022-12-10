const axios = require('axios');
const checkIns = require('./check-in.mongo');

const DEFAULT_CHECK_IN_ID = 0;

async function getCheckIns() {
    return await checkIns.find({}); 
}
async function getNextCheckInId() {
    const latestCheckIn = await checkIns
        .findOne()
        .sort('-id')
    if (!latestCheckIn) {
        return DEFAULT_CHECK_IN_ID
    }
    return latestCheckIn.id + 1
}

async function addNewCheckIn(checkInToAdd) {
    const nextId = await getNextCheckInId()
    const newCheckInToAdd = Object.assign(checkInToAdd, {
        id: nextId
    })
    const newCheckIn = new checkIns(newCheckInToAdd)
    try {
        await newCheckIn.save()
        return {
            ok: true,
            status: 201,
            message: 'check-in saved to database'
        }
    } catch(err) {
        console.log(err)
        return err
    }
}

module.exports = {
    getCheckIns,
    addNewCheckIn
}
