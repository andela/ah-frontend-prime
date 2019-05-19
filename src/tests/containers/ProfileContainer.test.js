import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import moxios from "moxios";
import store from "../../store";

import {
  UsersProfileContainer as DumpProfileContainer,
  mapStateToProps,
  mapDispatchToProps
} from "../../containers/profile/UsersProfileContainer";

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
  it("should render without crushing", () => {
    const props = {
      match: {
        params: "imatiti"
      },
      getUsersProfileAction: () => jest.fn(),
      getUsersFollowers: () => jest.fn(),
      getUsersFollowing: () => jest.fn()
    };
    const wrapper = shallow(<DumpProfileContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should map state to props", () => {
    const state = {
      profileReducer: {
        profile: null
      },
      followsUnfollowsReducer: {
        followers: []
      }
    };
    expect(mapStateToProps(state)).toEqual({ profile: null, followers: [] });
  });

  it("should receive props", () => {
    const props = {
      match: {
        params: "imatiti"
      },
      getUsersProfileAction: () => jest.fn(),
      getUsersFollowers: () => jest.fn(),
      getUsersFollowing: () => jest.fn()
    };
    const wrapper = shallow(<DumpProfileContainer {...props} />);
    const newProps = {
      profile: {
        username: "imatiti",
        bio: "the fudge",
        full_name: "fudge supreme",
        image: "image"
      }
    };

    wrapper.instance().componentWillReceiveProps(newProps);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call followUser function", () => {
    const props = {
      match: {
        params: "imatiti"
      },
      getUsersProfileAction: jest.fn(),
      getUsersFollowers: jest.fn(),
      getUsersFollowing: jest.fn(),
      followUser: jest.fn()
    };
    const wrapper = shallow(<DumpProfileContainer {...props} />);
    wrapper.instance().handlefollowUser("david");
    expect(wrapper.instance().props.followUser).toBeCalled();
  });

  it("should call unfollowUser function", () => {
    const props = {
      match: {
        params: "imatiti"
      },
      getUsersProfileAction: jest.fn(),
      getUsersFollowers: jest.fn(),
      getUsersFollowing: jest.fn(),
      unfollowUser: jest.fn()
    };
    const wrapper = shallow(<DumpProfileContainer {...props} />);
    wrapper.instance().handleunfollowUser("david");
    expect(wrapper.instance().props.unfollowUser).toBeCalled();
  });
});
