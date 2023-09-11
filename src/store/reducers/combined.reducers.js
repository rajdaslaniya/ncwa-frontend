import { combineReducers } from "redux";

import userReducer from "./user.reducers";

export const reducers = combineReducers({
  userData: userReducer,
});
