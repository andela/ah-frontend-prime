import React from "react";
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  IS_LOADING,
  REGISTRATION_ERROR_MESSAGE,
  RIGISTRATION_SUCCESS_MESSAGE
} from "../../actions/types";
import { registerUser } from "../../actions/registerActions";

const middleware = [thunk];
const mockStore = configureStore(middleware);
describe("testing register actions creaters", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should handle handle user registration", () => {
    const mockData = {
      user: {
        email: "anyatibriansw@gmail.com",
        username: "anyatibrianww",
        password: "pbkdf2_sha256$120000$ebTLjdpg4Ssj$zXKtak3",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJp"
      }
    };

    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: mockData
      });
    });
    const expectedActions = [
      { type: IS_LOADING },
      { type: RIGISTRATION_SUCCESS_MESSAGE, payload: mockData }
    ];

    return store
      .dispatch(
        registerUser({
          user: {
            username: "primesupreme",
            email: "prime@gmail.com",
            password: "0785464@My"
          }
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it("should handle user registration error ", () => {
    const mockData = {
      errors: {
        email: ["user with this email already exists."],
        username: ["user with this username already exists."]
      }
    };
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
      { type: REGISTRATION_ERROR_MESSAGE, payload: mockData }
    ];
    const store = mockStore({});
    return store
      .dispatch(
        registerUser({
          user: {
            username: "primesupreme",
            email: "prime@gmail.com",
            password: "0785464@My"
          }
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
