import React from "react";
import renderer from "react-test-renderer";
import App from "../src/containers/app";

describe("App", () => {
  it("should render without crashing", () => {
    const wrapper = renderer.create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
