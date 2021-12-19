const { gql } = require("apollo-server-express")

const userType = gql`
    type User{
        _id: ID!
        name: String
        lastName: String
        phone: String
        email: String!
        password: String!
        state: String
        projects:[Project]
    }
    type Project{
        _id: ID!
        name: String
        description: String
        topic: String
        isActive: Boolean
        owner: ID
    }

    type Query {
        getUsers: [User]
        getUserById(_id:String): User
    }
    type Mutation {
        createUser(
            name: String
            lastName: String
            phone: String
            email: String!
            password: String!
            state: String
        ): User
        updateUser(
            _id: ID!
            name: String
            lastName: String
            phone: String
            email: String!
            password: String!
            state: String
        ): User
    }
`;

module.exports = {userType}