const projectService = require('../services/project');

const projectResolvers ={
    Query:{
        getProjects: async (parent,args) => {
            let projects = await projectService.getProjects();
            return projects
        },
        getProjectById: async (parent,args) => {
            let project = await projectService.getProjectById(args._id)
            return project
        }

    },
    Mutation:{
        createProject: async (parent,args) => {
            let project = await projectService.createProject(args)
            return project
        },
        updateProject: async (parent,args) => {
            let project_update = await projectService.updateProject(args._id,args)
            return project_update
        },
    }
}

module.exports = {projectResolvers}