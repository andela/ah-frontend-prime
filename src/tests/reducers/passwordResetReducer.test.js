import passwordResetReducer from "../../reducers/passwordResetReducer";
import {
  ERROR_DURING_SENDING_LINK,
  IS_LOADING,
  SENDPASSWORD_RESET_LINK
} from "../../actions/types";

describe("test for passwordReset reducer", () => {
  const initialState = {
    errors: {},
    success: {},
    isLoading: false
  };
  it("should test password reset link was sent", () => {
    const payload = {
      message: "password reset link has been sent to your email"
    };
    const expectedState = passwordResetReducer(initialState, {
      type: SENDPASSWORD_RESET_LINK,
      payload: payload
    });

    expect(expectedState).toEqual({
      ...initialState,
      success: payload,
      isLoading: false
    });
  });
  it("should test password reset link was not sent", () => {
    const payload = { error: "the email does not match any account" };

    const expectedState = passwordResetReducer(initialState, {
      type: ERROR_DURING_SENDING_LINK,
      payload: payload
    });

    expect(expectedState).toEqual({
      ...initialState,
      errors: payload,
      isLoading: false
    });
  });
  it("should test the is reset reducer reducer", () => {
    const expectedState = passwordResetReducer(initialState, {
      type: IS_LOADING
    });
    expect(expectedState).toEqual({ ...initialState, isLoading: true });
  });
  it("should test the initial state of the reducer", () => {
    const expectedState = passwordResetReducer(undefined, {});
    expect(expectedState).toEqual(initialState);
  });
});
