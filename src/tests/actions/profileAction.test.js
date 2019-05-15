import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import { getProfileAction } from "../../actions/profileActions";

import { editProfileAction } from "../../actions/profileActions";
import {
  PROFILE_FETCH_FAILED,
  PROFILE_FETCHED,
  PROFILE_EDIT_SUCCESS
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
    return store.dispatch(getProfileAction()).then(() => {
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
    const expectedActions = [
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
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
