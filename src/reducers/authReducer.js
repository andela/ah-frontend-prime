import {
  REGISTRATION_ERROR_MESSAGE,
  RIGISTRATION_SUCCESS_MESSAGE,
  IS_LOADING
} from "../actions/types";

const initialState = {
  success: {},
  error: {},
  isRegistering: false,
  isLoginSuccess: false
};
export default function(state = initialState, actions) {
  switch (actions.type) {
    case RIGISTRATION_SUCCESS_MESSAGE:
      return {
        ...state,
        success: actions.payload,

        isRegistering: false,
        isLoginSuccess: true
      };
    case REGISTRATION_ERROR_MESSAGE:
      return {
        ...state,
        error: actions.payload,
        isRegistering: false,
        isLoginSuccess: false
      };
    case IS_LOADING:
      return {
        ...state,
        isRegistering: true
      };
    default:
      return state;
  }
}
