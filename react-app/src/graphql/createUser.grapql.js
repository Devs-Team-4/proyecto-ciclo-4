import { gql } from "@apollo/client";

const CREATE_USER = gql`
mutation Mutation($name: String, $lastName: String, $phone: String, $email: String!, $password: String!, $state: String) {
  createUser(name: $name, lastName: $lastName, phone: $phone, email: $email, password: $password, state: $state) {
    _id
    name
    lastName
    phone
    email
    password
    state
  }
}
`;
export default CREATE_USER;