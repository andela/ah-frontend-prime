import data from "../mock_data/moxios_mock";
import {
  mapStateToProps,
  SingleArticleComponent as DumpProfileContainer
} from "../../components/articles/singleArticle";
import { shallow } from "enzyme";
import React from "react";

describe("Component for getting single Articles", () => {
  it("should tests mapstateToprops", () => {
    const state = {
      getArticleReducer: { article: data.article },
      profileReducer: { isfollowing: false }
    };
    expect(mapStateToProps(state)).toEqual({
      article: data.article,
      isfollowing: false
    });
  });

  it("should call handleLike function", () => {
    const props = {
      match: {
        params: {
          slug: "truth"
        }
      },
      getArticleAction: jest.fn(),
      likes: 1,
      dislikes: 0,
      isfollowing: true,
      article: {},
      likeArticle: jest.fn(),
      dislikeArticle: jest.fn()
    };
    const wrapper = shallow(<DumpProfileContainer {...props} />);
    wrapper.instance().handlelike("truth");
    expect(wrapper.instance().props.likeArticle).toBeCalled();
  });

  it("should call handleDisLike function", () => {
    const props = {
      match: {
        params: {
          slug: "truth"
        }
      },
      getArticleAction: jest.fn(),
      likes: 1,
      dislikes: 0,
      isfollowing: true,
      article: {},
      likeArticle: jest.fn(),
      dislikeArticle: jest.fn()
    };
    const wrapper = shallow(<DumpProfileContainer {...props} />);
    wrapper.instance().handledislike("truth");
    expect(wrapper.instance().props.dislikeArticle).toBeCalled();
  });

  it("should receive props", () => {
    const props = {
      match: {
        params: {
          slug: "truth"
        }
      },
      getArticleAction: jest.fn(),
      likes: 1,
      dislikes: 0,
      isfollowing: true,
      article: {},
      likeArticle: jest.fn(),
      dislikeArticle: jest.fn()
    };
    const wrapper = shallow(<DumpProfileContainer {...props} />);
    const newProps = {
      likes: 1,
      dislikes: 0
    };

    wrapper.instance().componentWillReceiveProps(newProps);
    expect(wrapper).toMatchSnapshot();
  });
});
