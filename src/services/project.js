const Project = require('../models/project');
const userService = require('./user');

//Create Project
createProject = async (project) => {
    let projectInstance = new Project(project)
    let created_project = await projectInstance.save()
    await userService.updateProject(Project['owner'],created_project['_id'])
    return created_project
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