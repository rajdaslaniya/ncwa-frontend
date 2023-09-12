import {
  IS_EMAIL_VERIFIED,
  LOGOUT_USER,
  SET_USER_EMAIL,
  SET_USER_TOKEN,
} from "../actions/user.action";

const initialState = {
  email: "",
  token: "",
  isEmailVerify: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Your reducer logic here
    case SET_USER_EMAIL:
      return { ...state, email: action.payload };
    case SET_USER_TOKEN:
      return { ...state, token: action.payload };
    case IS_EMAIL_VERIFIED:
      return { ...state, isEmailVerify: action.payload };
    case LOGOUT_USER:
      return { ...initialState };
    default:
      return state;
  }
};

export default userReducer;
