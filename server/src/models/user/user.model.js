const users = require('./user.mongo');

async function findUserById(filter) {
    return await users.findOne(filter)
}

async function getUsers() {
    return await users.find({}); 
}

async function addNewUser(userToAdd) {
    const userQuery = await findUserById({id: userToAdd.id})
    if (userQuery) {
        return {
            ok: false,
            status: 409,
            message: 'User already exists in database. Not added.',
            user: userQuery
        }
    }
    const newUser = new users(userToAdd);
    try {
        const user = await newUser.save();
        return {
            ok: true,
            status: 201,
            message: 'user saved to database',
            user
        }
    } catch (err) {
        return err
    }
}

module.exports = {
    findUserById,
    getUsers,
    addNewUser
}