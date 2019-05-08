import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import data from "../../tests/mock_data/moxios_mock";
import { userLoginRequest } from "../../actions/LoginAction";
import { SUCCESSFUL, LOGIN_STARTED } from "../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Login Action", () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it("should login successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: data.login.success
      });
    });
    const expectedAction = [
      {
        type: LOGIN_STARTED
      },
      {
        payload:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJpYW5lbW1hNzBAZ21haWwuY29tIiwiZXhwIjoxNTU3MjQxNDQ4fQ.DBxu7fBjtxiUE59c7_eUP1nk3n_CT-C41gkS3IMcEjU",
        type: SUCCESSFUL
      }
    ];
    const validData = {
      user: {
        email: "ianemma70@gmail.com",
        password: "@bochiSupreme1"
      }
    };

    return store
      .dispatch(userLoginRequest(validData, { history: [] }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
  it("returns error message on login failure", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 400,
        response: data.failure
      });
    });
    const expectedAction = [{ type: "LOGIN_STARTED" }, { type: "LOGIN_FAIL" }];
    const invalidData = {
      user: {
        email: "",
        password: ""
      }
    };
    return store.dispatch(userLoginRequest(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
