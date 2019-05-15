import { socialAuthReducer } from "../../reducers/socialAuthReducer";
import {
  GOOGLE_FAILURE,
  GOOGLE_LOGIN,
  FACEBOOK_FAILURE,
  FACEBOOK_LOGIN
} from "../../actions/types";

describe("Social auth Reducer", () => {
  it("should have initial state", () => {
    expect(socialAuthReducer(undefined, {})).toEqual({
      isAuthenticated: false,
      facebook_login: false,
      google_login: false,
      payload: "",
      token: ""
    });
  });

  it("should update state on google success", () => {
    expect(
      socialAuthReducer([], {
        type: GOOGLE_LOGIN,
        payload: { token: undefined, username: "dave" }
      })
    ).toEqual({
      google_login: true,
      isAuthenticated: true,
      payload: "dave",
      token: undefined
    });
  });

  it("should update state on facebook success", () => {
    expect(
      socialAuthReducer([], {
        type: FACEBOOK_LOGIN,
        payload: { token: undefined, username: "dave" }
      })
    ).toEqual({
      facebook_login: true,
      isAuthenticated: true,
      payload: "dave",
      token: undefined
    });
  });

  it("should update state on google failure", () => {
    expect(
      socialAuthReducer([], { type: GOOGLE_FAILURE, payload: "" })
    ).toEqual({
      payload: ""
    });
  });

  it("should update state if there is a FACEBOOK FAILURE", () => {
    expect(
      socialAuthReducer([], { type: FACEBOOK_FAILURE, payload: "" })
    ).toEqual({
      payload: ""
    });
  });
});
