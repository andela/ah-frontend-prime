import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import moxios from "moxios";
import store from "../../store";

import ProfileContainer, {
  ProfileContainer as DumpProfileContainer,
  mapStateToProps,
  mapDispatchToProps
} from "../../containers/profile/ProfileContainer";

describe("profile container", () => {
  const initialState = {
    profile: { isLoading: false, profile: null, message: null }
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
    const wrapper = shallow(
      <DumpProfileContainer
        profile={{ username: "ianemma" }}
        errors={{ error: "error" }}
        getProfileAction={mockFn}
        isLoading={{ isLoading: false }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should map state to props", () => {
    const state = {
      profileReducer: {
        profile: null
      }
    };
    expect(mapStateToProps(state)).toEqual({ profile: null });
  });
  it("should match dispatch to props", () => {
    const dispatch = jest.fn();
    const initialState = {
      profileReducer: {
        profile: null,
        message: null,
        isLoading: false
      }
    };
    mapStateToProps(initialState);
    mapDispatchToProps(dispatch).getProfileAction();
    expect(mapDispatchToProps(dispatch).getProfileAction()).toEqual(undefined);
  });
  it("should receive props", () => {
    const wrapper = shallow(
      <DumpProfileContainer getProfileAction={() => jest.fn()} />
    );
    const newProps = {
        profile: {
            username: "imatiti",
            bio: "the fudge",
            full_name: "fudge supreme",
            image: "image",
        }
    };

    wrapper.instance().componentWillReceiveProps(newProps);
    expect(wrapper).toMatchSnapshot();
  });
});
