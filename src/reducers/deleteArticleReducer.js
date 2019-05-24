import { DELETE_ARTICLE_SUCCESS } from "../actions/types";

const initialState = { message: "" };

const deleteArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default deleteArticleReducer;
