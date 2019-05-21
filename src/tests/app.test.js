import React from "react";
import renderer from "react-test-renderer";
import App from "../containers/app";
import LoginComponent from "../components/login/LoginModal";
import data from "./mock_data/moxios_mock";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter, Route } from "react-router-dom";

describe("login Component", () => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);

  const div = document.createElement("div");
});

describe("App", () => {
  it("should render without crashing", () => {
    const wrapper = renderer.create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("login Component", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <LoginComponent />
            </Route>
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
