import React from "react";
import renderer from "react-test-renderer";
import App from "../containers/app";
import Login from "../components/loginComponent";
import { Home } from "../components/home";
import { shallow } from "enzyme";
import articles from "./mock_data/moxios_mock";

const props = {
  articles: articles,
  getArticlesAction: jest.fn()
};

describe("App", () => {
  it("should render without crashing", () => {
    const wrapper = renderer.create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("render the login component", () => {
    const wrapper = renderer.create(<Login />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("render the home page", () => {
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
