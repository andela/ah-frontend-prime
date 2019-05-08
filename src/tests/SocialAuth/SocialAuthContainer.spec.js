import React from "react";
import { shallow } from "enzyme";
import {
  SocialAuthContainer,
  mapStateToProps
} from "../../containers/SocialAuthContainer";

const props = {
  googlelogin: jest.fn(),
  facebooklogin: jest.fn(),
  payload: {
    data: {
      auth_token: "token"
    }
  },
  socialAuthState: {
    isAuthenticated: false,
    facebook_login: false,
    google_login: false,
    payload: "",
    token: ""
  }
};

const initialState = {
  isAuthenticated: false,
  facebook_login: false,
  google_login: false,
  payload: "",
  token: ""
};

const mockFn = jest.fn();

describe("SocialAuthContainer", () => {
  let wrapper = shallow(<SocialAuthContainer {...props} />);
  it("should match with snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should return response after google success", () => {
    wrapper.setProps({
      response: {
        tokenId: "token"
      }
    });
    wrapper.instance().handlegooglesuccess(wrapper.instance().props.response);
    expect(wrapper.instance().props.response).toEqual({ tokenId: "token" });
  });

  it("should return response after facebook success", () => {
    wrapper.setProps({
      response: {
        accessToken: "token"
      }
    });
    wrapper.instance().handlefacebooksuccess(wrapper.instance().props.response);
    expect(wrapper.instance().props.response).toEqual({ accessToken: "token" });
  });

  it("should return response after google failure", () => {
    wrapper.setProps({
      response: {
        accessToken: "token"
      }
    });
    wrapper.instance().handlegooglesuccess(wrapper.instance().props.response);
    expect(wrapper.instance().props.response).toEqual({ accessToken: "token" });
  });

  it("should return response after facebook failure", () => {
    wrapper.setProps({
      response: {
        tokenId: "token"
      }
    });
    wrapper.instance().handlefacebooksuccess(wrapper.instance().props.response);
    expect(wrapper.instance().props.response).toEqual({ tokenId: "token" });
  });

  it("should call googlelogin function", () => {
    wrapper.instance().handlegooglefailure({
      tokenId: "id_token"
    });
    expect(wrapper.instance().props.googlelogin).toBeCalled();
  });

  it("should call facebook function", () => {
    wrapper.instance().handlefacebooksuccess({
      accessToken: "token"
    });
    expect(wrapper.instance().props.facebooklogin).toBeCalled();
  });

  it("should update next props", () => {
    const nextProps = { socialAuthState: { isAuthenticated: true } };
    wrapper.setProps({ history: { push: mockFn } });
    wrapper.instance().componentWillReceiveProps(nextProps);
  });

  it("should contain the current inital state from mapStateToProps", () => {
    const mockedState = {
      socialAuthReducer: {
        isAuthenticated: false
      }
    };
    const state = mapStateToProps(mockedState).socialAuthReducer;
    expect(state).toBeFalsy();
  });
});
