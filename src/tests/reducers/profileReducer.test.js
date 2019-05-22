import {
  PROFILE_FETCHING,
  PROFILE_FETCH_FAILED,
  PROFILE_FETCHED,
  PROFILE_EDIT_SUCCESS,
  FOLLOWERS_LIST,
  FOLLOWING_LIST,
  FOLLOWERS_LIST_FAILED,
  FOLLOWING_LIST_FAILED,
  FOLLOW_SUCCESS,
  UNFOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_FAILURE
} from "../../actions/types";
import profileReducer from "../../reducers/profileReducer";
import followsUnfollowsReducer from "../../reducers/followsUnfollowsReducer";

describe("profile Reducer Tests", () => {
  const initialState = {
    profile: null,
    isLoading: false,
    message: null,
    isUpdating: false,
    upDateSuccess: false,
    followers_no: 0,
    following_no: 0,
    isfollowing: false
  };

  const followsInitialState = {
    followers: [],
    following: []
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
    upDateSuccess: false,
    followers_no: 0,
    following_no: 0
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
      upDateSuccess: false,
      followers_no: 0,
      following_no: 0,
      isfollowing: false
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
      upDateSuccess: true,
      followers_no: 0,
      following_no: 0,
      isfollowing: false
    };

    expect(profileReducer(initialState, dispatchedAction)).toEqual(
      editedProfileState
    );
  });
  it("should handle fetching of a user profile", () => {
    const fetchingAction = {
      type: PROFILE_FETCHING,
      payload: {
        profile: {
          followers_no: 0,
          following_no: 0,
          isfollowing: false
        }
      }
    };
    const profilefetchingsuccess = {
      profile: null,
      message: null,
      isLoading: true,
      isUpdating: false,
      upDateSuccess: false,
      followers_no: 0,
      following_no: 0,
      isfollowing: false
    };
    expect(profileReducer(initialState, fetchingAction)).toEqual(
      profilefetchingsuccess
    );
  });

  it("return all the users followers", () => {
    const followersfetchingAction = {
      type: FOLLOWERS_LIST,
      payload: ["david", "dan"]
    };
    const followersfetchingsuccess = {
      followers: ["david", "dan"],
      following: []
    };
    expect(
      followsUnfollowsReducer(followsInitialState, followersfetchingAction)
    ).toEqual(followersfetchingsuccess);
  });

  it("return all the users a user is following", () => {
    const followingfetchingAction = {
      type: FOLLOWING_LIST,
      payload: ["denis", "joy"]
    };
    const followingfetchingsuccess = {
      followers: [],
      following: ["denis", "joy"]
    };
    expect(
      followsUnfollowsReducer(followsInitialState, followingfetchingAction)
    ).toEqual(followingfetchingsuccess);
  });

  it("fail to return followers list", () => {
    const followersfailedfetchingAction = {
      type: FOLLOWERS_LIST_FAILED,
      payload: ["error"]
    };
    const followersfetchingfailure = {
      followers: ["error"],
      following: []
    };
    expect(
      followsUnfollowsReducer(
        followsInitialState,
        followersfailedfetchingAction
      )
    ).toEqual(followersfetchingfailure);
  });

  it("fail to return following list", () => {
    const followingfailedfetchAction = {
      type: FOLLOWING_LIST_FAILED,
      payload: ["error"]
    };
    const followingfetchfailure = {
      followers: [],
      following: ["error"]
    };
    expect(
      followsUnfollowsReducer(followsInitialState, followingfailedfetchAction)
    ).toEqual(followingfetchfailure);
  });

  it("follow a user", () => {
    const followAction = {
      type: FOLLOW_SUCCESS,
      payload: "You have followed user"
    };
    const followsuccess = {
      profile: null,
      isLoading: false,
      message: "You have followed user",
      isUpdating: false,
      upDateSuccess: false,
      followers_no: 0,
      following_no: 0,
      isfollowing: "True"
    };
    expect(profileReducer(initialState, followAction)).toEqual(followsuccess);
  });

  it("unfollow a user", () => {
    const unfollowAction = {
      type: UNFOLLOW_SUCCESS,
      payload: "You have unfollowed user"
    };
    const unfollowsuccess = {
      profile: null,
      isLoading: false,
      message: "You have unfollowed user",
      isUpdating: false,
      upDateSuccess: false,
      followers_no: 0,
      following_no: 0,
      isfollowing: "False"
    };
    expect(profileReducer(initialState, unfollowAction)).toEqual(
      unfollowsuccess
    );
  });

  it("fails to follow a user", () => {
    const failedfollowAction = {
      type: FOLLOW_FAILURE,
      payload: "Failed to follow user"
    };
    const followsfailure = {
      profile: null,
      isLoading: false,
      message: "Failed to follow user",
      isUpdating: false,
      upDateSuccess: false,
      followers_no: 0,
      following_no: 0,
      isfollowing: "False"
    };
    expect(profileReducer(initialState, failedfollowAction)).toEqual(
      followsfailure
    );
  });

  it("fails to unfollow a user", () => {
    const failedunfollowAction = {
      type: UNFOLLOW_FAILURE,
      payload: "Failed to unfollow user"
    };
    const unfollowfailure = {
      profile: null,
      isLoading: false,
      message: "Failed to unfollow user",
      isUpdating: false,
      upDateSuccess: false,
      followers_no: 0,
      following_no: 0,
      isfollowing: "True"
    };
    expect(profileReducer(initialState, failedunfollowAction)).toEqual(
      unfollowfailure
    );
  });
});
