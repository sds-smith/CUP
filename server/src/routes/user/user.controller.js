const {
    findUserById,
    getUsers,
    addNewUser
} = require('../../models/user/user.model')

async function httpFindUserById(req, res) {
    const {id} = req.body
    return res.status(200).json(await findUserById(id))
}

async function httpGetUsers(req, res) {
    return res.status(200).json(await getUsers())
}

async function httpAddNewUser(req, res) {
    const userToAdd = req.body
    const userResponse = await addNewUser(userToAdd)
    return res.status(userResponse.status).json(userResponse)
}

module.exports = {
    httpFindUserById,
    httpGetUsers,
    httpAddNewUser
}