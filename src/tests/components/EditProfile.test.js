import { shallow } from "enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import store from "../../store";

import {
  EditProfile,
  mapStateToProps
} from "../../components/userProfile/EditProfile";

describe("editprofile component success tests", () => {
  const initialState = {
    profile: { isLoading: false, profile: null, message: null }
  };
  const props = {
    profile: {
      full_name: "",
      bio: "",
      image: ""
    },
    onChange: jest.fn(),
    uploadImage: jest.fn(),
    editProfileAction: jest.fn(),
    history: { push: jest.fn() }
  };
  const nextProps = {
    upDateSuccess: true
  };
  const mockFn = jest.fn();
  const mockStore = configureStore([thunk]);
  let store;
  let wrapper = shallow(<EditProfile {...props} />);

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });
  it("should render without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle name change", () => {
    const event = {
      target: {
        name: "full_name",
        value: "emma ogwal"
      }
    };
    wrapper.instance().handleNameChange(event);
    expect(wrapper.instance().state.full_name).toBe("emma ogwal");
  });
  it("should handle bio change", () => {
    const event = {
      target: {
        name: "bio",
        value: "I am the fudge"
      }
    };
    wrapper.instance().handleBioChange(event);
    expect(wrapper.instance().state.bio).toBe("I am the fudge");
  });
  it("should handle image upload", () => {
    const event = {
      target: {
        name: "image",
        files: "files.jpg"
      }
    };
    wrapper.instance().handleImageUpload(event);
    expect(wrapper.instance().state.image).toBe("files.jpg");
  });
  it("should simulate image upload", () => {
    wrapper.find("#banyati").simulate("change", {
      target: {
        name: "ian",
        files: [new File(["../../styles/images/profile.jpeg"], "sample.png")]
      }
    });
    expect(props.onChange).toBeCalledTimes(0);
  });
  it("should handle the Submit event", () => {
    const instance = wrapper.instance();
    const event = {
      target: {
        name: "",
        value: "emma ogwal"
      }
    };
    event.preventDefault = jest.fn();
    instance.handleSubmit(event);
    expect(instance.state.full_name).toEqual("emma ogwal");
  });
  it("should not redirect on edit fail", () => {
    wrapper.setProps({ upDateSuccess: false });
    expect(props.history.push).toBeCalledTimes(0);
  });
  it("should redirect on edit success", () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledWith("/profile/null");
  });
  it("should map state to props", () => {
    const state = {
      profileReducer: {
        profile: null
      }
    };
    expect(mapStateToProps(state)).toEqual({ profile: null });
  });
});
