import {
  ERROR_DURING_SENDING_LINK,
  IS_LOADING,
  SENDPASSWORD_RESET_LINK
} from "../actions/types";

const initialState = {
  errors: {},
  success: {},
  isLoading: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SENDPASSWORD_RESET_LINK:
      return {
        ...state,
        success: action.payload,
        isLoading: false
      };
    case ERROR_DURING_SENDING_LINK:
      return {
        ...state,
        errors: action.payload,
        isLoading: false
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
