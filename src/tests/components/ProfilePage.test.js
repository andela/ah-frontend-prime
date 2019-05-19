import { shallow } from "enzyme";
import React from "react";

import ProfilePage from "../../components/userProfile/ProfilePage";

describe("profile page tests", () => {
  const props = {
    onSubmit: jest.fn(),
    errors: null,
    generalError: ""
  };
  it("should render without crushing", () => {
    const wrapper = shallow(<ProfilePage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
