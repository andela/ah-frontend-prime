import React from "react";
import { shallow } from "enzyme";
import {
  mapStateToProps,
  PasswordResetEmailContainer
} from "../../containers/passwordResetEmail";

let wrapper;
let instance;
let props = {
  email: "",
  errors: {
    email: ""
  },
  handleOnChange: jest.fn(),
  handleOnsubmit: jest.fn(),
  sendPasswordResetLink: jest.fn()
};
describe("passwordResetEmailContainer", () => {
  beforeEach(() => {
    wrapper = shallow(<PasswordResetEmailContainer {...props} />);
    instance = wrapper.instance();
  });
  it("should render the component without fail", function() {
    expect(wrapper).toMatchSnapshot();
  });
  it("should test for invalid email address", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "email",
        value: "anyatibrian@gmail"
      }
    };
    instance.handleOnChange(e);
    expect(instance.state.errors.email).toEqual("invalid email");
  });
  it("should test for valid email address", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "email",
        value: "anyatibrian@gmail.com"
      }
    };
    instance.handleOnChange(e);
    expect(instance.state.errors.email).toEqual("");
  });
  it("should test for default state", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "qwerks",
        value: "anyatibrian@gmail.com"
      }
    };
    instance.handleOnChange(e);
    expect(instance.state.errors.email).toEqual("");
  });
  it("should handle  the onsubmit method ", () => {
    const e = {
      preventDefault: jest.fn()
    };
    instance.handleOnsubmit(e);
    expect(props.sendPasswordResetLink).toHaveBeenCalled();
  });
  it("should test mapstateProps for the container ", () => {
    const state = {
      passReset: {
        success: {
          message: "password reset link has been sent to your email"
        }
      }
    };
    expect(mapStateToProps(state)).toEqual({
      success: {
        message: "password reset link has been sent to your email"
      }
    });
  });
});
