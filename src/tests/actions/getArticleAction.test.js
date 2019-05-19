import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { FETCH_ARTICLE_SUCCESS } from "../../actions/types";
import { getArticleAction } from "../../actions/getArticle";
import data from "../mock_data/moxios_mock";

const middleWare = [thunk];

const mockStore = configureStore(middleWare);

describe("Action for getting Article", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Should fetch an article", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          article: {
            id: 2,
            author: {
              username: "patritsfitz",
              bio: "",
              email: "patrick.okosu@andela.com",
              full_name: "",
              image:
                "https://firebasestorage.googleapis.com/v0/b/ah-frontend-prime.appspot.com/o/images%2F100_1655.JPG?" +
                "alt=media&token=08c9e580-a9c2-4121-8fd1-c4e9a236e943",
              followers_no: 1,
              following_no: 0,
              favorite_articles: "No favorite articles"
            }
          },
          title: "This",
          average_rating: 0,
          description: "is",
          body: "the new Article",
          image: "",
          createdAt: "2019-05-13T15:18:22.258778Z",
          updatedAt: "2019-05-16T09:18:52.697507Z",
          slug: "cedes-alpha",
          tagList: [],
          likes: 0,
          dislikes: 0,
          reading_time: " less than a minute read",
          favorite_count: 0
        }
      });
    });
    const expectedAction = [
      {
        type: FETCH_ARTICLE_SUCCESS,
        payload: {
          article: {
            id: 2,
            author: {
              username: "patritsfitz",
              bio: "",
              email: "patrick.okosu@andela.com",
              full_name: "",
              image:
                "https://firebasestorage.googleapis.com/v0/b/ah-frontend-prime.appspot.com/o/images%2F100_1655.JPG?" +
                "alt=media&token=08c9e580-a9c2-4121-8fd1-c4e9a236e943",
              followers_no: 1,
              following_no: 0,
              favorite_articles: "No favorite articles"
            }
          },
          title: "This",
          average_rating: 0,
          description: "is",
          body: "the new Article",
          image: "",
          createdAt: "2019-05-13T15:18:22.258778Z",
          updatedAt: "2019-05-16T09:18:52.697507Z",
          slug: "cedes-alpha",
          tagList: [],
          likes: 0,
          dislikes: 0,
          reading_time: " less than a minute read",
          favorite_count: 0
        }
      }
    ];
    return store.dispatch(getArticleAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
