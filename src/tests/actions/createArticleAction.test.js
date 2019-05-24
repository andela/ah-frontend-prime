import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { ARTICLE_SUCCESS, ARTICLE_FAIL } from "../../actions/types";
import { articleCreateEditAction } from "../../actions/articleCreateEditAction";
import data from "../mock_data/moxios_mock";
import { request } from "http";
import { JestEnvironment } from "@jest/environment";

const middleWare = [thunk];

const mockStore = configureStore(middleWare);

describe("Action for creating Articles", () => {
  beforeEach(() => {
    sessionStorage.setItem(
      "token",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJwYXRyaWNrL" +
        "m9rb3N1QGFuZGVsYS5jb20iLCJleHAiOjE1NTgzNjYwODJ9.nFbY0SaUN_faErSztpHWB" +
        "pjID-kPZmca7IUBxO6kP2M"
    );
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should create article if right data is passed", () => {
    const store = mockStore({});

    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 201,
        response: {}
      });
    });

    const expectedAction = [
      {
        type: ARTICLE_SUCCESS,
        payload: {}
      }
    ];
    return store
      .dispatch(
        articleCreateEditAction(
          data.article,
          "https://www.makesite.com/",
          "post",
          {
            props: {
              history: { push: jest.fn() }
            }
          }
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
  it("should not create articles if no data is passed", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 400,
        response: {
          errors: data.errors1
        }
      });
    });
    const expectedAction = [
      {
        type: ARTICLE_FAIL
      }
    ];
    return store
      .dispatch(
        articleCreateEditAction(
          data.article_no_data,
          "post",
          "https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/",
          "post",
          "created"
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
