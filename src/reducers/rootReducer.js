import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import getArticlesReducer from "./getArticlesReducer";
import socialAuthReducer from "./socialAuthReducer";
import passwordResetReducer from "./passwordResetReducer";
import passwordChangeReducer from "./passwordChangeReducer";

export default combineReducers({
  auth_login: loginReducer,
  getArticlesReducer,
  auth: authReducer,
  socialAuthReducer: socialAuthReducer,
  passReset: passwordResetReducer,
  passChange: passwordChangeReducer
});
