import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import getArticlesReducer from "./getArticlesReducer";
import socialAuthReducer from "./socialAuthReducer";

export default combineReducers({
  auth_login: loginReducer,
  getArticlesReducer,
  auth: authReducer,
  socialAuthReducer: socialAuthReducer
});
