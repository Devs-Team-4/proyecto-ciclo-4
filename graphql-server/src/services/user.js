const User = require('../models/user');

//Create User
createUser = async (user) => {
    let userInstance = new User(user)
    user1 = await userInstance.save()
    return user1
}
//get all users
getUsers = async () => {
    let user = await User.find({}).populate("projects")
    return user
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

updateProject = async (userId,projectId) => {
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

