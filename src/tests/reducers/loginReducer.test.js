import { LOGIN_STARTED, LOGIN_FAIL, SUCCESSFUL } from "../../actions/types";
import loginReducer from "../../reducers/loginReducer";

describe("Login Reducer Tests", () => {
  const initialState = {
    isSuccessful: false,
    loginSuccess: false,
    token: "",
    errors: null,
    isProcessing: null
  };

  const dispatchedAction = {
    type: SUCCESSFUL,
    payload: {
      user: {
        email: "ianemma70@gmail.com",
        username: "ianemma",
        token: "eyJ0eXAiOiJKV1Q"
      }
    }
  };

  const newState = {
    isSuccessful: true,
    loginSuccess: true,
    token: {
      user: {
        email: "ianemma70@gmail.com",
        username: "ianemma",
        token: "eyJ0eXAiOiJKV1Q"
      }
    },
    errors: null,
    isProcessing: null
  };

  it("should successfully login", () => {
    expect(loginReducer(initialState, dispatchedAction)).toEqual(newState);
  });
  it("should handle login failure", () => {
    const failAction = {
      type: LOGIN_FAIL,
      payload: {}
    };

    const failState = {
      isProcessing: null,
      isSuccessful: false,
      loginSuccess: false,
      errors: {},
      token: ""
    };
    expect(loginReducer(initialState, failAction)).toEqual(failState);
  });
  it("should handle login start", () => {
    const startAction = {
      type: LOGIN_STARTED,
      payload: {}
    };

    const startState = {
      isProcessing: true,
      isSuccessful: false,
      loginSuccess: false,
      errors: null,
      token: ""
    };
    expect(loginReducer(initialState, startAction)).toEqual(startState);
  });
  it("should handle initial state", () => {
    const noAction = {
      type: "",
      payload: {}
    };
    expect(loginReducer(initialState, noAction)).toEqual(initialState);
  });
});
