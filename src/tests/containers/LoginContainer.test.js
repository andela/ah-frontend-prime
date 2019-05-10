import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import moxios from "moxios";
import store from "../../store";
import LoginContainer, {
  LoginContainer as DumpLoginContainer,
  mapStateToProps
} from "../../containers/Login/LoginContainer";

describe("login container", () => {
  const initialState = {
    login: { isSuccesfull: false, token: "", errors: null }
  };
  const props = {
    history: { push: jest.fn() }
  };

  const nextProps = {
    loginSuccess: true
  };
  const mockFn = jest.fn();
  const mockStore = configureStore([thunk]);
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install();
    wrapper = shallow(
      <DumpLoginContainer open={false} close={mockFn} {...props} />
    );
  });

  afterEach(function() {
    moxios.uninstall();
  });
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should handle the onChange event", () => {
    const event = {
      target: {
        name: "password",
        value: "pass123"
      }
    };
    wrapper.instance().handleChange(event);
    expect(wrapper.instance().state.password).toBe("pass123");
  });
  

  it("should handle the onSubmit event", () => {
    const props = {
      userLoginRequest: jest.fn()
    };
    let wrapper = shallow(<DumpLoginContainer {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: "",
        value: "Hello"
      }
    };
    event.preventDefault = jest.fn();
    instance.handleSubmit(event);
    expect(instance.state.errors.email).toEqual("The email is required");
  });

  it("should mapStateToProps", () => {
    const state = {
      auth_login: { isProcessing: false }
    };
    expect(mapStateToProps(state)).toEqual({ isProcessing: false });
  });
  it("should not redirect on failed login", () => {
    wrapper.setProps({ loginSuccess: false });

    expect(props.history.push).toBeCalledTimes(0);
  });

  it("should redirect on login success", () => {
    wrapper.setProps({ ...nextProps });

    expect(props.history.push).toBeCalledWith("/");
  });
});
