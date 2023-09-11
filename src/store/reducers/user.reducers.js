import { SET_USER_EMAIL } from "../actions/user.action";

const initialState = {
  email: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Your reducer logic here
    case SET_USER_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default userReducer;
