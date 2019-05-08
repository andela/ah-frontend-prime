import {
  GOOGLE_FAILURE,
  GOOGLE_LOGIN,
  FACEBOOK_FAILURE,
  FACEBOOK_LOGIN
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  facebook_login: false,
  google_login: false,
  payload: "",
  token: ""
};

const socialAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        facebook_login: true,
        token: action.token,
        payload: action.payload
      };
    case FACEBOOK_FAILURE:
      return {
        ...state,
        payload: action.payload
      };
    case GOOGLE_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        google_login: true,
        token: action.token,
        payload: action.payload
      };
    case GOOGLE_FAILURE:
      return {
        ...state,
        payload: action.payload
      };
    default:
      return state;
  }
};

export default socialAuthReducer;
