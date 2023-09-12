import { gql } from "@apollo/client";

export const GET_ALL_GROUP = gql`
  query Query {
    getGroup {
      id
      name
    }
  }
`;
