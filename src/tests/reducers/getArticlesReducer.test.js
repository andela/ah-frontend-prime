import getArticlesReducer from "../../reducers/getArticlesReducer";
import { FETCH_ARTICLES_SUCCESS } from "../../actions/types";
import articles from "../mock_data/moxios_mock";

describe("App", () => {
  const initialState = {
    articles: []
  };
  it("Should handle reducers initial state", () => {
    const newState = getArticlesReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("Should handle reducers after getting articles", () => {
    const newState = getArticlesReducer(initialState, {
      type: FETCH_ARTICLES_SUCCESS,
      payload: articles
    });
    expect(newState).toEqual({ ...initialState, articles: articles });
  });
});
