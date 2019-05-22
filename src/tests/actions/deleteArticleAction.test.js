import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { DELETE_ARTICLE_SUCCESS } from "../../actions/types";
import { deleteArticleAction } from "../../actions/deleteArticleAction";

const middleWare = [thunk];

const mockStore = configureStore(middleWare);

describe("Action for getting Article", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Should delete an article", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          message: "Article has been successfully deleted"
        }
      });
    });
    const expectedAction = [
      {
        type: DELETE_ARTICLE_SUCCESS,
        payload: {
          message: "Article has been successfully deleted"
        }
      }
    ];
    return store.dispatch(deleteArticleAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
