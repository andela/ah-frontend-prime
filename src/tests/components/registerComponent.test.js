import React from "react";
import { shallow } from "enzyme/build";
import RegisterComponent from "../../components/registerComponent";

describe("login component", () => {
  let wrapper;
  let props = {
    username: "",
    email: "",
    password: "",
    errors: {
      username: "",
      email: "",
      password: ""
    },
    error_message: {
      errors: {}
    },
    classes: null,
    handleOnChange: jest.fn(),
    handleOnSubmit: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<RegisterComponent {...props} />);
  });
  it("should render with fail", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should simulate  onchange events for form fields ", () => {
    wrapper
      .dive()
      .find("#username")
      .simulate("change");
    expect(props.handleOnChange).toHaveBeenCalledTimes(1);
  });
  it("should simulate onclick event for submit button", () => {
    const onSubmit = wrapper.dive();
    onSubmit.find(".button-success").simulate("submit");
  });
});
