import deleteArticleReducer from "../../reducers/deleteArticleReducer";
import { DELETE_ARTICLE_SUCCESS } from "../../actions/types";

describe("App", () => {
  const initialState = {
    message: ""
  };
  it("Should handle reducers initial state", () => {
    const newState = deleteArticleReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("should successfully delete article", () => {
    const dispatchedAction = {
      type: DELETE_ARTICLE_SUCCESS,
      payload: {
        message: ""
      }
    };
    const newState = {
      message: {
        message: ""
      }
    };

    expect(deleteArticleReducer(initialState, dispatchedAction)).toEqual(
      newState
    );
  });
});
