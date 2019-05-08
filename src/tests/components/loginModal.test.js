import { shallow } from "enzyme";
import React from "react";

import LoginComponent from "../../components/login/LoginModal";

describe("login modal success tests", () => {
  const props = {
    onSubmit: jest.fn(),
    emailError: "",
    passwordError: "",
    errors: null,
    generalError: "",
    onRegister: jest.fn(),
    onPassword: jest.fn()
  };
  it("should render without crashing", () => {
    const wraps = shallow(<LoginComponent {...props} />);
    expect(wraps).toMatchSnapshot();
  });
});

describe("login modal fail tests", () => {
  const props = {
    onSubmit: jest.fn(),
    emailError: "error",
    passwordError: "error",
    errors: {},
    generalError: "error"
  };
  it("should render without crashing", () => {
    const wraps = shallow(<LoginComponent {...props} />);
    expect(wraps).toMatchSnapshot();
  });
});
