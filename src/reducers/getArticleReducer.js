import { FETCH_ARTICLE_SUCCESS } from "../actions/types";

const initialState = {
  article: {}
};

const getArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload
      };
    default:
      return state;
  }
};

export default getArticleReducer;
