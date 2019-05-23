import { CREATE_COMMENTS, CREATE_COMMENTS_ERRORS } from "../actions/types";

const initialState = {
  success: {},
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENTS:
      return {
        ...state,
        success: action.payload
      };
    case CREATE_COMMENTS_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};
