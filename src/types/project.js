const {gql} = require('apollo-server-express');
const projectType = gql`
    scalar Date

    type User{
        _id : ID!
        nombre : String
        apellido: String
        identificacion: String
        correo : String!
        password : String!
        rol : String
        estado : String
        projects : [Project]
    }
    type Project{
        _id : ID!
        nombre : String
        objetivo: String
        presupuesto : String
        fechaInicio: Date
        fechaFin: Date
        owner : ID
        is_active : Boolean
        fase_proyecto: String
    }
    type Query{
        getProjects:[Project]
        getProjectById(_id:String):Project
    }

    type Mutation{
        createProject(
            nombre : String
            objetivo: String
            presupuesto : String
            fechaInicio: Date
            fechaFin: Date
            owner : ID
            is_active : Boolean
            fase_proyecto: String
        ):Project

        updateProject(
            _id : ID!
            nombre : String
            objetivo: String
            presupuesto : String
            fechaInicio: Date
            fechaFin: Date
            owner : ID
            is_active : Boolean
            fase_proyecto: String
        ):Project
    }
`;

module.exports = {projectType}