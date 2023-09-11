import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Query {
    GetUser {
      id
      email
      password
    }
  }
`;

export const CREATE_NEW_REGISTRATION = gql`
  mutation UserRegistration(
    $password: String!
    $email: String!
    $name: String!
    $phoneNumber: String!
    $address: String!
    $isCouncilMember: Boolean!
    $groupId: Int!
  ) {
    userRegistration(
      password: $password
      email: $email
      name: $name
      phone_number: $phoneNumber
      address: $address
      is_council_member: $isCouncilMember
      group_id: $groupId
    ) {
      message
      status
      success
      token
      data {
        address
        email
        id
      }
    }
  }
`;

export const VERIFY_OTP = gql`
  mutation verifyOtp($email: String!, $otp: String!) {
    verifyOtp(email: $email, otp: $otp) {
      message
      status
      success
    }
  }
`;

export const RESEND_OTP = gql`
  mutation ResendOtp($email: String!) {
    resendOtp(email: $email) {
      is_email_sent
      message
      status
      success
    }
  }
`;

export const CHECK_USER_DETAILS = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      status
      success
      data {
        id
        phone_number
        email
      }
      token
    }
  }
`;
export const CHECK_USER_EMAIL = gql`
  mutation checkUserEmail($email: String!) {
    checkUserEmail(email: $email) {
      is_email_sent
      status
      is_user_registered
      data {
        id
        email
      }
    }
  }
`;
