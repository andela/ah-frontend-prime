import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  mapStateToProps,
  RegisterContainer
} from "../../containers/registerContainer";
import { shallow } from "enzyme";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let instance;
let wrapper;
const props = {
  handleOnSubmit: jest.fn(),
  registerUser: jest.fn(),
  username: "",
  password: "",
  email: "",
  error: {
    username: "",
    password: "",
    email: ""
  },
  history: { push: jest.fn() }
};
const nextProps = {
  isLoginSuccess: true
};

describe("registerContainer", () => {
  beforeEach(() => {
    wrapper = shallow(<RegisterContainer {...props} />);
    instance = wrapper.instance();
  });
  it("should  render without fail ", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should handle on submit", () => {
    const e = {
      preventDefault: jest.fn(),
      errors: {
        username: "",
        password: "",
        email: ""
      }
    };
    instance.handleOnSubmit(e);
    expect(props.registerUser).toBeCalled();
  });
  it("should handle on submit fail", () => {
    const e = {
      preventDefault: jest.fn()
    };
    instance.setState({ errors: { username: "test error" } });
    const registerfaile = instance.handleOnSubmit(e);
    expect(registerfaile).toBe(false);
  });
  it("should handle on change password too short", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "username",
        value: "anya"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.username).toBe(
      " username must be eight characters"
    );
  });
  it("should handle on change email errors", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "email",
        value: "anyatibra.va"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.email).toBe(" invalid email");
  });
  it("should handle on change password errors", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "password",
        value: "anyatibra.va"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.password).toBe(
      "your password must have least one number, lowercase char,special char and min of 8 chars"
    );
  });
  it("should handle on change right password", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "password",
        value: "075755@My"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.password).toBe("");
  });
  it("should handle on change right username", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "username",
        value: "anyatibrian"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.username).toBe("");
  });
  it("should handle on change right password", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "email",
        value: "anyatibrian@gmail.com"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.username).toBe("");
  });
  it("should handle on change default", () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: "test",
        value: "anyatibrian@gmail.com"
      }
    };
    instance.handleOnchange(e);
    expect(instance.state.errors.username).toBe("");
  });
  it("should check map states to props", () => {
    const state = {
      auth: { isRegistering: false }
    };
    expect(mapStateToProps(state)).toEqual({ isRegistering: false });
  });
  it("should redirect on successfully registration", () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledWith("/login");
  });
  it("should redirect on successfully registration", () => {
    wrapper.setProps({ ...nextProps, isLoginSuccess: false });
    expect(props.history.push).toHaveBeenCalledTimes(0);
  });
});
