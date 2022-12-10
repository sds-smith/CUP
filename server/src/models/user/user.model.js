const users = require('./user.mongo');

async function findUser(filter) {
    return await users.findOne(filter)
}

async function getUsers() {
    return await users.find({}); 
}

async function addNewUser(userToAdd) {
    const userQuery = await users.find(userToAdd)
    if (userQuery.length) {
        return {
            ok: false,
            status: 409,
            message: 'Coffee already exists in database. Not added.'
        }
    }
    const newUser = new users(userToAdd);
    try {
        await newUser.save();
        return {
            ok: true,
            status: 201,
            message: 'user saved to database'
        }
    } catch (err) {
        return err
    }
}

module.exports = {
    findUser,
    getUsers,
    addNewUser
}