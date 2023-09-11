import { gql } from "@apollo/client";

export const GET_FIELDS = gql`
  query Query {
    GetGroup {
      id
      name
    }
  }
`;
