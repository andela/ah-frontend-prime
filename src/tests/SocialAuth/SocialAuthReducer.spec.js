import socialAuthReducers from "../../reducers/socialAuthReducer";
import {
  GOOGLE_FAILURE,
  GOOGLE_LOGIN,
  FACEBOOK_FAILURE,
  FACEBOOK_LOGIN
} from "../../actions/types";

describe("Social auth Reducer", () => {
  it("should have initial state", () => {
    expect(socialAuthReducers(undefined, {})).toEqual({
      isAuthenticated: false,
      facebook_login: false,
      google_login: false,
      payload: "",
      token: ""
    });
  });

  it("should update state on google success", () => {
    expect(
      socialAuthReducers([], { type: GOOGLE_LOGIN, payload: "token" })
    ).toEqual({
      google_login: true,
      isAuthenticated: true,
      payload: "token",
      token: undefined
    });
  });

  it("should update state on facebook success", () => {
    expect(
      socialAuthReducers([], {
        type: FACEBOOK_LOGIN,
        payload: {
          data: {
            auth_token: "auth_token"
          }
        }
      })
    ).toEqual({
      facebook_login: true,
      isAuthenticated: true,
      payload: {
        data: {
          auth_token: "auth_token"
        }
      }
    });
  });

  it("should update state on google failure", () => {
    expect(
      socialAuthReducers([], { type: GOOGLE_FAILURE, payload: "" })
    ).toEqual({
      payload: ""
    });
  });

  it("should update state if there is a FACEBOOK FAILURE", () => {
    expect(
      socialAuthReducers([], { type: FACEBOOK_FAILURE, payload: "" })
    ).toEqual({
      payload: ""
    });
  });
});
