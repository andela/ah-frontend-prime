import React from "react";
import { shallow } from "enzyme";
import {
  mapStateToProps,
  PasswordResetContainer
} from "../../containers/passwordReset";

let instance;
let wrapper;
let props = {
  handleOnChange: jest.fn(),
  handleOnSubmit: jest.fn(),
  match: {
    params: {
      token: "84848448y67hbd"
    }
  },
  passwordReset: jest.fn(),
  history: { push: jest.fn() }
};
const nextProps = {
  redirectToLogin: true
};
describe("test password reset container", () => {
  beforeEach(() => {
    wrapper = shallow(<PasswordResetContainer {...props} />);
    instance = wrapper.instance();
  });
  it("should render password reset containers without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should test short password password during reset ", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "password",
        value: "1234"
      }
    };
    instance.handleOnChange(e);
    expect(instance.state.errors.password).toEqual(
      "password must have a number, lowercase char,special char and min of 8 chars"
    );
  });
  it("should test for correct user password ", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "password",
        value: "12345@My"
      }
    };
    instance.handleOnChange(e);
    expect(instance.state.errors.password).toEqual("");
  });

  it("should test users password don't match", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "passwordConfirm",
        value: "12345@My"
      }
    };
    instance.setState({ password: "123456@My" });
    instance.handleOnChange(e);
    expect(instance.state.errors.passwordConfirm).toEqual(
      "your passwords don't match"
    );
  });

  it("should test users password match", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "passwordConfirm",
        value: "12345@My"
      }
    };
    instance.setState({ password: "12345@My" });
    instance.handleOnChange(e);
    expect(instance.state.errors.passwordConfirm).toEqual("");
  });

  it("should return the default stat during validation", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "passpap",
        value: "12345@My"
      }
    };
    instance.handleOnChange(e);
    expect(instance.state.errors.password).toEqual("");
  });
  it("should tests mapstateToprops", () => {
    const state = {
      passChange: {
        success: { message: "your password has been reset successfully" }
      }
    };
    expect(mapStateToProps(state)).toEqual({
      success: { message: "your password has been reset successfully" }
    });
  });

  it("handle the onsubmit method when its clicked", () => {
    const e = {
      preventDefault: jest.fn()
    };
    instance.handleOnSubmit(e);
    expect(props.passwordReset).toHaveBeenCalled();
  });
  it("should redirect when password reset is successful", () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledWith("/login");
  });
  it("should not redirect  when password reset fails", () => {
    wrapper.setProps({ ...nextProps, redirectToLogin: false });
    expect(props.history.push).toHaveBeenCalledTimes(0);
  });
});
