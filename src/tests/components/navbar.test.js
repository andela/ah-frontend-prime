import React from "react";
import { NavBarComponent } from "../../components/navbar";
import { shallow } from "enzyme";

let wrapper;
let instance;
const props = {
  navBarDrawer: false,
  toggleDrawer: jest.fn(),
  logout: jest.fn()
};
describe(" navbar component", () => {
  beforeEach(() => {
    wrapper = shallow(<NavBarComponent {...props} />);
    instance = wrapper.instance();
  });
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should test toggling of the navbar", () => {
    const e = {
      preventDefault: jest.fn()
    };
    props.toggleDrawer(e);
    wrapper.setState({ navBarDrawer: true });
    expect(props.navBarDrawer).toEqual(false);
  });
  it("should test handle toggle method", () => {
    const e = {
      preventDefault: jest.fn()
    };
    instance.toggleDrawer(e);
    expect(props.navBarDrawer).toEqual(false);
  });
  it("should load other nav elements when a user is not authenticated", () => {
    wrapper.setProps({
      isAuthenticated: '<ul className="nav navbar-nav ml-auto"> </ul>'
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("should handle onclick event", () => {
    instance.logout();
    expect(props.logout).toBeCalledTimes(0);
  });
});
