const User = require('../models/user');

//Create User
createUser = async (user) => {
    let userInstance = new User(user)
    userInstance.save()
}
//get all users
getUsers = async () => {
    users = await User.find({})
    return users
}
//get only one user
getUserById = async (userId) => {
    user = await User.findById(userId).exec()
    return user 
}
//update an user
updateUser = async (userId,user) => {
    new_user = await User.findByIdAndUpdate(userId,user,{new: true})
    return new_user
}
//Delete an user
deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId)
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}