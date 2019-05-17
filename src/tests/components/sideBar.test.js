import React from "react";
import { shallow } from "enzyme";
import SideBar from "../../components/sideDrawer";

let wrapper;
let instance;
describe("test for sidebar  component", () => {
  beforeEach(() => {
    wrapper = shallow(<SideBar />);
  });
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
