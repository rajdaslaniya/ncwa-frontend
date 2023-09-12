import { gql } from "@apollo/client";

export const GET_ALL_COURSE = gql`
  query Query {
    getCourse {
      created_date
      description
      id
      name
      updated_date
    }
  }
`;
