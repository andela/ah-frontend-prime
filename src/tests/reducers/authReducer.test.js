import React from "react";
import authReducer from "../../reducers/authReducer";
import {
  REGISTRATION_ERROR_MESSAGE,
  RIGISTRATION_SUCCESS_MESSAGE,
  IS_LOADING
} from "../../actions/types";

const initialState = {
  success: {},
  error: {},
  isRegistering: false,
  isLoginSuccess: false
};
describe("authreducer", () => {
  it("should return  initial state", () => {
    const newState = authReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
  it("should handle RIGISTRATION_SUCCESS_MESSAGE", () => {
    const payload = {
      user: {
        id: 25,
        email: "qwakzi@gmail.com",
        username: "qwakzi",
        password: "075755@My",
        token: "ruffweeksfor beetercange"
      }
    };
    const successAction = {
      type: RIGISTRATION_SUCCESS_MESSAGE,
      payload: payload
    };
    const newState = authReducer(initialState, successAction);
    expect(newState).toEqual({
      ...initialState,
      success: payload,
      isLoginSuccess: true
    });
  });
  it("should handle REGISTRATION_ERROR_MESSAGE ", () => {
    let payload = {
      errors: {
        email: ["user with this email already exists."],
        username: ["user with this username already exists."]
      }
    };
    const errorMessage = {
      type: REGISTRATION_ERROR_MESSAGE,
      payload: payload
    };
    const newState = authReducer(initialState, errorMessage);
    expect(newState).toEqual({
      ...initialState,
      error: payload
    });
  });
  it("should handle IS_REGISTERING ", () => {
    const isRegistering = {
      type: IS_LOADING
    };
    const newState = authReducer(initialState, isRegistering);
    expect(newState).toEqual({ ...initialState, isRegistering: true });
  });
});
