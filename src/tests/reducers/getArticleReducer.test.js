import getArticleReducer from "../../reducers/getArticleReducer";
import {
  FETCH_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_SUCCESS,
  LIKE_ARTICLE_SUCCESS
} from "../../actions/types";

describe("App", () => {
  const initialState = {
    article: {},
    likes: 0,
    dislikes: 0
  };
  it("Should handle reducers initial state", () => {
    const newState = getArticleReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("should successfully fetch article", () => {
    const dispatchedAction = {
      type: FETCH_ARTICLE_SUCCESS,
      payload: {
        article: {}
      }
    };
    const newState = {
      article: {
        article: {}
      },
      likes: undefined,
      dislikes: undefined
    };

    expect(getArticleReducer(initialState, dispatchedAction)).toEqual(newState);
  });

  it("should successfully like a users article", () => {
    const dispatchedAction = {
      type: LIKE_ARTICLE_SUCCESS,
      payload: {
        article: {},
        likes: 1,
        dislikes: 0
      }
    };
    const newState = {
      article: {},
      likes: 1,
      dislikes: 0
    };

    expect(getArticleReducer(initialState, dispatchedAction)).toEqual(newState);
  });

  it("should successfully dislike a users article", () => {
    const dispatchedAction = {
      type: DISLIKE_ARTICLE_SUCCESS,
      payload: {
        article: {},
        likes: 0,
        dislikes: 1
      }
    };
    const newState = {
      article: {},
      likes: 0,
      dislikes: 1
    };

    expect(getArticleReducer(initialState, dispatchedAction)).toEqual(newState);
  });
});
