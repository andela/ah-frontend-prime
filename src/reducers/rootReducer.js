import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import getArticlesReducer from "./getArticlesReducer";
import { socialAuthReducer } from "./socialAuthReducer";
import passwordResetReducer from "./passwordResetReducer";
import passwordChangeReducer from "./passwordChangeReducer";
import profileReducer from "./profileReducer";
import getArticleReducer from "./getArticleReducer";
import createArticleReducer from "./createArticleReducer";
import followsUnfollowsReducer from "./followsUnfollowsReducer";
import commentsReducer from "./commentsReducer";
import getCommentsReducer from "./getCommentsReducer";

export default combineReducers({
  auth_login: loginReducer,
  getArticlesReducer,
  getArticleReducer,
  createArticleReducer,
  auth: authReducer,
  socialAuthReducer: socialAuthReducer,
  passReset: passwordResetReducer,
  passChange: passwordChangeReducer,
  profileReducer: profileReducer,
  followsUnfollowsReducer: followsUnfollowsReducer,
  profileReducer,
  comments: commentsReducer,
  getComments: getCommentsReducer
});
