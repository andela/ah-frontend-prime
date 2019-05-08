import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import getArticlesReducer from "./getArticlesReducer";

export default combineReducers({
  auth_login: loginReducer,
  getArticlesReducer
});
