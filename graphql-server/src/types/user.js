const {gql} = require('apollo-server-express');

const userType = gql`
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
    
    type Query {
        getUsers:[User]
        getUserById(_id:String): User
    }

    type Mutation {
        createUser(
            nombre : String
            apellido: String
            identificacion: String
            correo : String!
            password : String!
            rol : String
            estado : String
        ):User

        updateUser(
            _id : ID!
            nombre : String
            apellido: String
            identificacion: String!
            correo : String!
            password : String!
            rol : String
            estado : String
        ):User
    }
`

module.exports = {userType}