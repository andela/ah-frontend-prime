const initialState = {
  redirectonArticleCreation: false
};
const createArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ARTICLE_SUCCESS":
      return {
        ...state,
        redirectonArticleCreation: true
      };
    default:
      return state;
  }
};
export default createArticleReducer;
