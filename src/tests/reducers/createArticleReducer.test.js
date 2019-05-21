import createArticleReducer from "../../reducers/createArticleReducer";
import { ARTICLE_SUCCESS } from "../../actions/types";
import data from "../mock_data/moxios_mock";

describe("Create Article", () => {
  const initialState = {
    redirectonArticleCreation: false
  };
  it("Should handle reducers initial state", () => {
    const newState = createArticleReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("Should handle reducers after getting article", () => {
    const newState = createArticleReducer(initialState, {
      type: ARTICLE_SUCCESS,
      redirectonArticleCreation: true
    });
    expect(newState).toEqual({
      ...initialState,
      redirectonArticleCreation: true
    });
  });
});
