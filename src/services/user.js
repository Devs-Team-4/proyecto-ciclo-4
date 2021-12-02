const User = require('../models/user');

//Create User
createUser = async (user) => {
    let userInstance = new User(user)
    let user = await userInstance.save()
    return user
}
//get all users
getUsers = async () => {
    let users = await User.find({})
    return users
}
//get only one user
getUserById = async (userId) => {
    let user = await User.findById(userId).populate("projects")
    return user 
}
//update an user
updateUser = async (userId,user) => {
    let new_user = await User.findByIdAndUpdate(userId,user,{new: true})
    return new_user
}

updateProject = async (user,projectId) => {
    let user = await User.findByIdAndUpdate(userId,{
        $push:{
            projects: projectId
        }
    })
    return user
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
    updateProject,
    deleteUser
}