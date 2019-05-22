import {
  FETCH_ARTICLE_SUCCESS,
  LIKE_ARTICLE_FAILURE,
  LIKE_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_FAILURE,
  DISLIKE_ARTICLE_SUCCESS
} from "../actions/types";

const initialState = {
  article: {},
  likes: 0,
  dislikes: 0
};

const getArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        likes: action.payload.article.likes,
        dislikes: action.payload.article.dislikes
      };
    case LIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        likes: action.payload.likes,
        dislikes: action.payload.dislikes
      };
    case DISLIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        likes: action.payload.likes,
        dislikes: action.payload.dislikes
      };
    default:
      return state;
  }
};

export default getArticleReducer;
