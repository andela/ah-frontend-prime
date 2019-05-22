import { shallow, mount } from "enzyme";
import React from "react";
import FollowingList from "../../components/FollowingList";
import FollowersList from "../../components/FollowersList";
import FollowsStats from "../../components/FollowsStats";
import FollowsButton from "../../components/FollowsButton";

describe("following list popup", () => {
  it("should render without crashing", () => {
    const props = {
      following: []
    };
    const wrapper = shallow(<FollowingList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    const props = {
      following: ["david"]
    };
    const wrapper = shallow(<FollowingList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("followers list popup", () => {
  it("should render without crashing", () => {
    const props = {
      followers: []
    };
    const wrapper = shallow(<FollowersList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    const props = {
      followers: ["dan"]
    };
    const wrapper = shallow(<FollowersList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("followers and following statistics", () => {
  const props = {
    followers: [],
    following: [],
    followers_count: 0,
    following_count: 0
  };
  it("should render without crashing", () => {
    const wrapper = shallow(<FollowsStats {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("follow/unfollow button", () => {
  const props = {
    isfollowing: false,
    unfollowUser: jest.fn(),
    followUser: jest.fn()
  };
  it("should render without crashing", () => {
    const wrapper = shallow(<FollowsButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("follower click", () => {
  it("should click on a follower", () => {
    const props = {
      followers: ["david"]
    };
    const wrapper = mount(<FollowersList {...props} />);
    wrapper.find("div#follower").simulate("click");
    expect(wrapper).toMatchSnapshot();
  });
});

describe("following click", () => {
  it("should click on a user  that is being followed", () => {
    const props = {
      following: ["david"]
    };
    const wrapper = mount(<FollowingList {...props} />);
    wrapper.find("div#following").simulate("click");
    expect(wrapper).toMatchSnapshot();
  });
});
