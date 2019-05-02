import React from "react";
import renderer from "react-test-renderer";
import App from "../src/containers/app";
import Login from "../src/components/loginComponent";

describe("App", () => {
  it("should render without crashing", () => {
    const wrapper = renderer.create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("render the login component",() => {
    const wrapper = renderer.create(<Login/>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
