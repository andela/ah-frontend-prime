import React from "react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import {
  passwordReset,
  sendPasswordResetLink
} from "../../actions/passwordResetActions";
import {
  ERROR_DURING_SENDING_LINK,
  IS_LOADING,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  SENDPASSWORD_RESET_LINK
} from "../../actions/types";

const middleWare = [thunk];
const mockStore = configureStore(middleWare);

describe("test for password reset actions", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should send email action link to the user", () => {
    const mockData = {
      message: "password reset link has been sent to your email"
    };
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockData
      });
    });
    const expectedActions = [
      { type: IS_LOADING },
      {
        type: SENDPASSWORD_RESET_LINK,
        payload: mockData
      }
    ];
    return store
      .dispatch(
        sendPasswordResetLink({
          email: "brian.anyati@andela.com"
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it("should test email does not exist", () => {
    const mockData = {
      error: "the email does not match any account"
    };
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: mockData
      });
    });
    const expectedActions = [
      { type: IS_LOADING },
      {
        type: ERROR_DURING_SENDING_LINK,
        payload: mockData
      }
    ];
    return store
      .dispatch(
        sendPasswordResetLink({
          email: "brian.anyati@andela.com"
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it("should test successful password reset", () => {
    const mockData = {
      message: "your password has been reset successfully"
    };
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockData
      });
    });
    const expectedActions = [
      {
        type: IS_LOADING
      },
      {
        type: RESET_PASSWORD,
        payload: mockData
      }
    ];
    return store
      .dispatch(
        passwordReset({
          user: {
            password: "12345@My",
            confirmpassword: "12345@My"
          }
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it("should test successful password reset fail", () => {
    const mockData = {
      error: "there was error during the password reset"
    };
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: mockData
      });
    });
    const expectedActions = [
      {
        type: IS_LOADING
      },
      {
        type: RESET_PASSWORD_ERROR,
        payload: mockData
      }
    ];
    return store
      .dispatch(
        passwordReset({
          user: {
            password: "12345@My",
            confirmpassword: "12345@My"
          }
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
