import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import moxios from "moxios";
import store from "../../store";

import { SingleArticleComponent as DumpProfileContainer } from "../../components/articles/singleArticle";
import { getArticleAction } from "../../actions/getArticle";

describe("profile container", () => {
  const initialState = {
    article: {},
    isfollowing: false
  };

  const mockFn = jest.fn();
  const mockStore = configureStore([thunk]);
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it("should call handlefollows", () => {
    const props = {
      isfollowing: true,
      article: {},
      unfollowUser: jest.fn(),
      followUser: jest.fn(),
      match: {
        params: {
          slug: "imatiti"
        }
      },
      getArticleAction: jest.fn()
    };
    const wrapper = shallow(<DumpProfileContainer {...props} />);
    wrapper.instance().handlefollowUser();
    expect(wrapper.instance().props.followUser).toBeCalled();
  });

  it("should call handleunfollows", () => {
    const props = {
      isfollowing: true,
      article: {},
      unfollowUser: jest.fn(),
      followUser: jest.fn(),
      match: {
        params: {
          slug: "imatiti"
        }
      },
      getArticleAction: jest.fn()
    };
    const wrapper = shallow(<DumpProfileContainer {...props} />);
    wrapper.instance().handleunfollowUser();
    expect(wrapper.instance().props.unfollowUser).toBeCalled();
  });

  it("should call isOwner", () => {
    const props = {
      isfollowing: true,
      article: {},
      unfollowUser: jest.fn(),
      followUser: jest.fn(),
      match: {
        params: {
          slug: "imatiti"
        }
      },
      getArticleAction: jest.fn()
    };
    const wrapper = shallow(<DumpProfileContainer {...props} />);
    expect(wrapper.instance().isOwner()).toEqual(false);
  });
});
