import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { FETCH_ARTICLES_SUCCESS } from "../../actions/types";
import { getArticlesAction } from "../../actions/getArticles";
import data from "../mock_data/moxios_mock";

const middleWare = [thunk];

const mockStore = configureStore(middleWare);

describe("Action for getting Articles", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Should fetch articles", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          count: 75,
          next:
            "https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/?page_size=2",
          previous: null,
          results: data.articles
        }
      });
    });
    const expectedAction = [
      {
        type: FETCH_ARTICLES_SUCCESS,
        payload: {
          count: 75,
          next:
            "https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/?page_size=2",
          previous: null,
          results: data.articles
        }
      }
    ];
    return store.dispatch(getArticlesAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
