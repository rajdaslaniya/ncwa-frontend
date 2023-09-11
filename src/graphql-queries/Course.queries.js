import { gql } from "@apollo/client";

export const GET_FIELDS = gql`
  query GetCourse {
    GetCourse {
      id
      course_title
      course_description
      status
      creation
    }
  }
`;
