import React from "react";
import { shallow } from "enzyme";
import SocialAuth from "../../components/SocialAuth";

describe("6", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<SocialAuth />);
    expect(wrapper).toMatchSnapshot();
  });
});
