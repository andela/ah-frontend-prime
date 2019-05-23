import React from "react";
import { shallow } from "enzyme";
import { Comments, mapStateToProps } from "../../components/comments";
import { commentData, fetchAllComments } from "../mock_data/moxios_mock";

describe("test for comments", () => {
  let wrapper;
  let instance;
  let props = {
    comments: "",
    fetchComments: jest.fn(),
    handleOnChange: jest.fn(),
    articleComments: jest.fn(),
    commentsMessage: [],
    mapStateToProps: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<Comments {...props} />);
    instance = wrapper.instance();
  });
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should test the handleChange method", () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: "comments",
        value: "great article"
      }
    };
    instance.handleOnChange(event);
    expect(instance.state.comments).toEqual("great article");
  });
  it("should test the onSubmit method ", () => {
    const event = {
      preventDefault: jest.fn()
    };
    instance.handleOnSubmit(event);
    expect(props.articleComments).toHaveBeenCalled();
  });
  it("should ", () => {
    wrapper.setProps({
      commentsMessage: [
        {
          id: 2,
          body: "this is it",
          author: {
            image: ""
          }
        }
      ]
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("should test map state to props", () => {
    let state;
    state = {
      getComments: {
        comments: fetchAllComments
      },
      comments: {
        success: commentData
      }
    };
    mapStateToProps(state);
    expect(props.mapStateToProps).toHaveBeenCalledTimes(0);
  });
});
