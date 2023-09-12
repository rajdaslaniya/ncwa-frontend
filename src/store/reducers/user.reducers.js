import {
  LOGOUT_USER,
  SET_USER_EMAIL,
  SET_USER_TOKEN,
} from "../actions/user.action";

const initialState = {
  email: "",
  token: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Your reducer logic here
    case SET_USER_EMAIL:
      return { ...state, email: action.payload };
    case SET_USER_TOKEN:
      return { ...state, token: action.payload };
    case LOGOUT_USER:
      return { ...initialState };
    default:
      return state;
  }
};

export default userReducer;
