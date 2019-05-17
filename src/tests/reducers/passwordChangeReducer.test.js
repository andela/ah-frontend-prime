import React from "react";
import {
  IS_LOADING,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR
} from "../../actions/types";
import passwordChangeReducer from "../../reducers/passwordChangeReducer";

let initialState;
describe("passwordChange reducer", () => {
  beforeEach(() => {
    initialState = {
      success: {},
      error: {},
      redirectToLogin: false,
      isLoading: false
    };
  });
  it("should test reset password reducer ", () => {
    const payload = {
      message: "your password has been reset successfully"
    };
    const expectedState = passwordChangeReducer(initialState, {
      type: RESET_PASSWORD,
      payload: payload
    });

    expect(expectedState).toEqual({
      ...initialState,
      success: payload,
      redirectToLogin: true,
      isLoading: false
    });
  });
  it("should test reset password error ", () => {
    const payload = {
      error: "there was error during the password reset"
    };
    const expectedState = passwordChangeReducer(initialState, {
      type: RESET_PASSWORD_ERROR,
      payload: payload
    });
    expect(expectedState).toEqual({
      ...initialState,
      error: payload,
      isLoading: false,
      redirectToLogin: false
    });
  });
  it("should test the is_loading reducer ", () => {
    const expectedState = passwordChangeReducer(initialState, {
      type: IS_LOADING
    });
    expect(expectedState).toEqual({
      ...initialState,
      isLoading: true
    });
  });
  it("should test the initial state for the reducer ", () => {
    const expectedState = passwordChangeReducer(undefined, {});
    expect(expectedState).toEqual(initialState);
  });
});
