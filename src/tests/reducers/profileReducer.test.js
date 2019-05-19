import {
  PROFILE_FETCHING,
  PROFILE_FETCH_FAILED,
  PROFILE_FETCHED,
  PROFILE_EDIT_SUCCESS
} from "../../actions/types";
import profileReducer from "../../reducers/profileReducer";

describe("profile Reducer Tests", () => {
  const initialState = {
    profile: null,
    isLoading: false,
    message: null,
    isUpdating: false,
    upDateSuccess: false
  };

  const dispatchedAction = {
    type: PROFILE_FETCHED,
    payload: {
      profile: {}
    }
  };

  const profileSuccess = {
    profile: { profile: {} },
    isLoading: false,
    message: true,
    isUpdating: false,
    upDateSuccess: false
  };

  it("should fetch a user profile", () => {
    expect(profileReducer(initialState, dispatchedAction)).toEqual(
      profileSuccess
    );
  });
  it("should fail to fetch a user profile", () => {
    const dispatchedAction = {
      type: PROFILE_FETCH_FAILED,
      payload: "invalid token"
    };
    const failedfetch = {
      profile: null,
      isLoading: false,
      message: "invalid token",
      isUpdating: false,
      upDateSuccess: false
    };
    expect(profileReducer(initialState, dispatchedAction)).toEqual(failedfetch);
  });
  it("should successfully edit a users profile", () => {
    const dispatchedAction = {
      type: PROFILE_EDIT_SUCCESS,
      payload: { profile: {} }
    };
    const editedProfileState = {
      profile: { profile: {} },
      isLoading: false,
      message: null,
      isUpdating: true,
      upDateSuccess: true
    };

    expect(profileReducer(initialState, dispatchedAction)).toEqual(
      editedProfileState
    );
  });
  it("should handle fetching of a user profile", () => {
    const fetchingAction = {
      type: PROFILE_FETCHING
    };
    const profilefetchingsuccess = {
      profile: null,
      message: null,
      isLoading: true,
      isUpdating: false,
      upDateSuccess: false
    };
    expect(profileReducer(initialState, fetchingAction)).toEqual(
      profilefetchingsuccess
    );
  });
});
