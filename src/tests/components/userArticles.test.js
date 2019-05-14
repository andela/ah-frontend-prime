import React from "react";
import { shallow, mount } from "enzyme";
import {
  UserArticles,
  mapStateToProps
} from "../../components/articles/userArticles";
import { Provider } from "react-redux";
import store from "../../store";
import data from "../mock_data/moxios_mock";
import { BrowserRouter } from "react-router-dom";

describe("user article tests", () => {
  it("should not regress", () => {
    const props = {
      articles: data.articles,
      getArticlesAction: jest.fn()
    };
    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <UserArticles {...props} />
        </Provider>
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should map state to props", () => {
    const appState = {
      getArticlesReducer: {
        articles: data.articles
      },
      auth: {
        isAutheticated: true,
        user: {
          token: "xxxxxx"
        }
      }
    };

    const componentState = {
      articles: data.articles
    };
    expect(mapStateToProps(appState)).toEqual(componentState);
  });
});
