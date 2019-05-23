import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import moxios from "moxios";
import { articleComments, fetchComments } from "../../actions/commentsActions";
import { commentData, fetchAllComments } from "../mock_data/moxios_mock";
import {
  CREATE_COMMENTS,
  CREATE_COMMENTS_ERRORS,
  FETCH_COMMENTS,
  FETCH_COMMENTS_ERRORS
} from "../../actions/types";

const middleware = [thunk];
const mockStore = configureStore(middleware);
describe("testing create comments action", function() {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should test create comments actions", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: commentData
      });
    });
    const expectedActions = [
      {
        type: CREATE_COMMENTS,
        payload: commentData
      }
    ];

    return store
      .dispatch(
        articleComments(
          {
            body: "prime@gmail.com"
          },
          "the02f"
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it("should test create comments error", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const mockData = {
        errors: {
          body: ["This field may not be blank."]
        }
      };
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: mockData
      });
    });
    const expectedActions = [
      {
        type: CREATE_COMMENTS_ERRORS,
        payload: {
          errors: {
            body: ["This field may not be blank."]
          }
        }
      }
    ];

    return store
      .dispatch(
        articleComments(
          {
            body: ""
          },
          "the02f"
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it("should test fetch comments actions", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: fetchAllComments
      });
    });
    const expectedActions = [
      {
        type: FETCH_COMMENTS,
        payload: fetchAllComments
      }
    ];

    return store.dispatch(fetchComments("the02f")).then(() => {
      expect(expectedActions).toEqual(expectedActions);
    });
  });

  it("should test fetch comments errors actions", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: { errors: "error fetching your comments" }
      });
    });
    const expectedActions = [
      {
        type: FETCH_COMMENTS_ERRORS,
        payload: { errors: "error fetching your comments" }
      }
    ];

    return store.dispatch(fetchComments("the02f")).then(() => {
      expect(expectedActions).toEqual(expectedActions);
    });
  });
});
