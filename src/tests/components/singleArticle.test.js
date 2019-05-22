import data from "../mock_data/moxios_mock";
import {
  mapStateToProps,
  SingleArticleComponent
} from "../../components/articles/singleArticle";

describe("Component for getting single Articles", () => {
  it("should tests mapstateToprops", () => {
    const state = {
      getArticleReducer: { article: data.article },
      profileReducer: { isfollowing: false }
    };
    expect(mapStateToProps(state)).toEqual({
      article: data.article,
      isfollowing: false
    });
  });
});
