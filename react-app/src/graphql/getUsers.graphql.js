import { gql } from "@apollo/client";

const GET_USERS = gql`
query Query {
  getUsers {
    _id
    name
    lastName
    phone
    email
    state
  }
}
`;

export default GET_USERS;
