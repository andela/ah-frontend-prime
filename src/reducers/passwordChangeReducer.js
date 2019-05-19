import {
  IS_LOADING,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR
} from "../actions/types";

const initialState = {
  success: {},
  error: {},
  isLoading: false,
  redirectToLogin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        success: action.payload,
        isLoading: false,
        redirectToLogin: true
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        redirectToLogin: false
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
