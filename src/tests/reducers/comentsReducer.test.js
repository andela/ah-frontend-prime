import commentsReducer from "../../reducers/commentsReducer";
import { CREATE_COMMENTS, CREATE_COMMENTS_ERRORS } from "../../actions/types";
import { commentData } from "../mock_data/moxios_mock";

describe("test for comments reducer", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      success: {},
      errors: {}
    };
  });
  it("should test the initial state of the comments reducer", () => {
    const expectedState = commentsReducer(initialState, {});
    expect(expectedState).toEqual(initialState);
  });
  it("should test fetch comment state of reducer", () => {
    const expectedState = commentsReducer(initialState, {
      type: CREATE_COMMENTS,
      payload: commentData
    });
    expect(expectedState).toEqual({ ...initialState, success: commentData });
  });
  it("should test fetch comment  error state of reducer", () => {
    const expectedState = commentsReducer(initialState, {
      type: CREATE_COMMENTS_ERRORS,
      payload: {
        errors: {
          body: ["This field may not be blank."]
        }
      }
    });
    expect(expectedState).toEqual({
      ...initialState,
      errors: {
        errors: {
          body: ["This field may not be blank."]
        }
      }
    });
  });
});
