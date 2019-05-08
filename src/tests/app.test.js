import React from "react";
import renderer from "react-test-renderer";
import App from "../containers/app";
import Login from "../components/login/LoginModal";
import data from "./mock_data/moxios_mock";
import { Home } from "../components/home";
import { shallow } from "enzyme";

const props = {
  articles: data.articles,
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
