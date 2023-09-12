export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_TOKEN = "SET_USER_TOKEN";
export const LOGOUT_USER = "LOGOUT_USER";
export const IS_EMAIL_VERIFIED = "IS_EMAIL_VERIFIED";

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const setUserToken = (token) => ({
  type: SET_USER_TOKEN,
  payload: token,
});

export const logoutUser = () => ({ type: LOGOUT_USER });

export const emailVerify = (isVerify) => ({
  type: IS_EMAIL_VERIFIED,
  payload: isVerify,
});
