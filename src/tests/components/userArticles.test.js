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

const props = {
  articles: data.articles,
  getArticlesAction: jest.fn(),
  deleteArticleAction: jest.fn(),
  deleteArticle: jest.fn()
};

describe("user article tests", () => {
  it("User articles should be tested", () => {
    const event = {
      preventDefault: () => {},
      target: {
        name: "body",
        value: "This is the body"
      }
    };

    const wrapper = shallow(<UserArticles {...props} />);
    wrapper.instance().deleteArticle("slug", event);

    expect(wrapper).toMatchSnapshot();
  });

  it("Should be able to delete on button click", () => {
    const wrapper = shallow(<UserArticles {...props} />);

    wrapper
      .find(".delete")
      .at(0)
      .simulate("click", "slug");

    expect(props.deleteArticleAction).toHaveBeenCalled();
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
