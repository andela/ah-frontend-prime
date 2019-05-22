import { shallow } from "enzyme";
import React from "react";
import ProfileComponent from "../../components/userProfile/ProfileComponent";
import EditProfileContainer from "../../containers/profile/EditProfileContainer";

describe("profileComponent tests", () => {
  const props = {
    onSubmit: jest.fn(),
    errors: null,
    generalError: ""
  };
  it("should render without crushing", () => {
    const wrapper = shallow(<ProfileComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("edit profile container tests", () => {
  const props = {
    onSubmit: jest.fn(),
    image: "",
    bio: "",
    full_name: ""
  };
  it("should render without crushing", () => {
    const wrapper = shallow(<EditProfileContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
