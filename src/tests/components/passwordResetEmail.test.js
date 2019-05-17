import React from "react";
import { shallow } from "enzyme";
import PasswordResetEmailComponent from "../../components/passwordResetEmail";

let wrapper;
let props = {
  email: "",
  handleOnChange: jest.fn(),
  errors: {
    email: ""
  },
  handleOnSubmit: jest.fn()
};
describe("passwordResetEmailLink ", () => {
  beforeEach(() => {
    wrapper = shallow(<PasswordResetEmailComponent {...props} />);
  });
  it("should render without fail", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should test email errors field", () => {
    wrapper.setProps({ errors: { email: "anyatibrian@gmail" } });
    expect(wrapper).toMatchSnapshot();
  });
  it("should test the loader field", () => {
    wrapper.setProps({ isLoading: "<Loader/>" });
    expect(wrapper).toMatchSnapshot();
  });
});
