import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import {
  getUsersProfileAction,
  editProfileAction,
  getUsersFollowers,
  getUsersFollowing,
  followUser,
  unfollowUser
} from "../../actions/profileActions";

import {
  PROFILE_FETCH_FAILED,
  PROFILE_FETCHED,
  PROFILE_EDIT_SUCCESS,
  FOLLOWERS_LIST_FAILED,
  FOLLOWING_LIST_FAILED,
  FOLLOW_SUCCESS,
  UNFOLLOW_SUCCESS,
  FOLLOWING_LIST,
  FOLLOWERS_LIST,
  FOLLOW_FAILURE,
  UNFOLLOW_FAILURE
} from "../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Profile action", () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });
  it("fetch profile successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          profile: {
            username: "ianemma",
            bio:
              "I have seen gods fly. well only in the movies. but that counts too",
            email: "ianemma70@gmail.com",
            full_name: "Emmanuel Ogwal H",
            image:
              "https://firebasestorage.googleapis.com/v0/b/ah-frontend-prime.appspot.com/o/images%2FIMG_2412.JPG?alt=media&token=17e275da-00c2-4968-8eb4-15ce0e1b25aa",
            followers_no: 0,
            following_no: 0,
            favorite_articles: "No favorite articles",
            following: "False"
          }
        }
      });
    });
    const expectedActions = [
      {
        type: PROFILE_FETCHED,

        payload: {
          username: "ianemma",
          bio:
            "I have seen gods fly. well only in the movies. but that counts too",
          email: "ianemma70@gmail.com",
          full_name: "Emmanuel Ogwal H",
          image:
            "https://firebasestorage.googleapis.com/v0/b/ah-frontend-prime.appspot.com/o/images%2FIMG_2412.JPG?alt=media&token=17e275da-00c2-4968-8eb4-15ce0e1b25aa",
          followers_no: 0,
          following_no: 0,
          favorite_articles: "No favorite articles",
          following: "False"
        }
      }
    ];
    return store.dispatch(getUsersProfileAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should fail to fetch profile ", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 400,
        response: {
          errors: {
            errors: "Error"
          }
        }
      });
    });
    const expectedActions = [
      {
        type: PROFILE_FETCH_FAILED,
        payload: {
          errors: "Error"
        }
      }
    ];
    return store.dispatch(getUsersProfileAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should edit profile successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          profile: {
            username: "ianemma",
            bio: "",
            email: "ianemma70@gmail.com",
            full_name: "Ian Emma Ogwal",
            image: "",
            followers_no: 0,
            following_no: 0,
            favorite_articles: "No favorite articles",
            following: "False"
          }
        }
      });
    });
    const expectedActions2 = [
      {
        type: PROFILE_EDIT_SUCCESS,
        payload: {
          username: "ianemma",
          bio: "",
          email: "ianemma70@gmail.com",
          full_name: "Ian Emma Ogwal",
          image: "",
          followers_no: 0,
          following_no: 0,
          favorite_articles: "No favorite articles",
          following: "False"
        }
      }
    ];

    const editData = { profile: { full_name: "Ian Emma Ogwal" } };
    return store.dispatch(editProfileAction(editData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions2);
    });
  });

  it("should get User following", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          profiles: ["david"]
        }
      });
    });
    const expectedActions = [
      {
        type: FOLLOWING_LIST,
        payload: ["david"]
      }
    ];
    const username = "ianemma";
    return store.dispatch(getUsersFollowing(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should get User followers", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          profiles: ["david"]
        }
      });
    });
    const expectedActions = [
      {
        type: FOLLOWERS_LIST,
        payload: ["david"]
      }
    ];
    const username = "ianemma";
    return store.dispatch(getUsersFollowers(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should fail to get User followers", () => {
    const store = mockStore({});
    const errResp = {
      status: 400,
      response: { message: "Error" }
    };
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.reject(errResp.response.message);
    });
    const expectedActions = [
      {
        type: FOLLOWERS_LIST_FAILED,
        payload: "Error"
      }
    ];
    const username = "ianemma";
    return store.dispatch(getUsersFollowers(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should fail to get User following", () => {
    const store = mockStore({});
    const errResp = {
      status: 400,
      response: { message: "Error" }
    };
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.reject(errResp.response.message);
    });
    const expectedActions = [
      {
        type: FOLLOWING_LIST_FAILED,
        payload: "Error"
      }
    ];
    const username = "ianemma";
    return store.dispatch(getUsersFollowing(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should follow users", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 201,
        response: {
          profile: {
            message: "You have followed ianemma"
          }
        }
      });
    });
    const expectedActions = [
      {
        type: FOLLOW_SUCCESS,
        payload: "You have followed ianemma"
      }
    ];
    const username = "ianemma";
    return store.dispatch(followUser(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should unfollow users", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          profile: {
            message: "You have unfollowed ianemma"
          }
        }
      });
    });
    const expectedActions = [
      {
        type: UNFOLLOW_SUCCESS,
        payload: "You have unfollowed ianemma"
      }
    ];
    const username = "ianemma";
    return store.dispatch(unfollowUser(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should fail to unfollow users", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        response: {
          profile: {
            error: "Failed to unfollow User"
          }
        }
      });
    });
    const expectedActions = [
      {
        type: UNFOLLOW_FAILURE,
        payload: "Failed to unfollow User"
      }
    ];
    const username = "ianemma";
    return store.dispatch(unfollowUser(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should fail to follow users", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        response: {
          profile: {
            error: "Failed to follow User"
          }
        }
      });
    });
    const expectedActions = [
      {
        type: FOLLOW_FAILURE,
        payload: "Failed to follow User"
      }
    ];
    const username = "ianemma";
    return store.dispatch(followUser(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should fail to follow users due to already following user", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        response: {
          errors: ["You already follow this user"]
        }
      });
    });
    const expectedActions = [
      {
        type: FOLLOW_FAILURE,
        payload: "You already follow this user"
      }
    ];
    const username = "ianemma";
    return store.dispatch(followUser(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should fail to unfollow users due to already unfollowing user", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        response: {
          errors: ["You already unfollow this user"]
        }
      });
    });
    const expectedActions = [
      {
        type: UNFOLLOW_FAILURE,
        payload: "You already unfollow this user"
      }
    ];
    const username = "ianemma";
    return store.dispatch(unfollowUser(username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
