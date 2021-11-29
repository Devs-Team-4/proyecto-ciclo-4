const User = require('../models/user');

createUser = async (user) => {
    let userInstance = new User(user)
    userInstance.save()
}

module.exports = {
    createUser
}