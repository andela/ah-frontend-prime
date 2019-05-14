import getArticleReducer from "../../reducers/getArticleReducer";
import { FETCH_ARTICLE_SUCCESS } from "../../actions/types";
import data from "../mock_data/moxios_mock";

describe("App", () => {
  const initialState = {
    article: {}
  };
  it("Should handle reducers initial state", () => {
    const newState = getArticleReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("Should handle reducers after getting article", () => {
    const newState = getArticleReducer(initialState, {
      type: FETCH_ARTICLE_SUCCESS,
      payload: data.article
    });
    expect(newState).toEqual({ ...initialState, article: data.article });
  });
});
