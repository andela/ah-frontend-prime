import React from "react";
import { shallow } from "enzyme";
import { PasswordResetComponent } from "../../components/passwordReset";

let props = {
  password: "",
  passwordConfirm: "",
  handleOnChange: jest.fn(),
  errors: {
    password: "",
    passwordConfirm: ""
  },
  handleOnSubmit: jest.fn()
};
let instance;
describe("passwordComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PasswordResetComponent {...props} />);
    instance = wrapper.instance();
  });
  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should display password reset errors ", () => {
    wrapper.setProps({
      errors: {
        password: "12345@My",
        passwordConfirm: "12345@My"
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("should show loaders ", () => {
    wrapper.setProps({ isLoading: "<Loader />" });
    expect(wrapper).toMatchSnapshot();
  });
});
