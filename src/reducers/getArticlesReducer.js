import { FETCH_ARTICLES_SUCCESS } from "../actions/types";

const initialState = {
  articles: []
};

const getArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.results,
        next: action.payload.next,
        previous: action.payload["previous"]
      };
    default:
      return state;
  }
};

export default getArticlesReducer;
