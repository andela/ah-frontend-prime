import axios from "axios";
import { FETCH_ARTICLE_SUCCESS } from "./types";

export const getArticleAction = slug => dispatch => {
  return axios
    .get(
      "https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/" + slug
    )
    .then(response => {
      dispatch(fetchArticlesSuccess(response.data));
    });
};

const fetchArticlesSuccess = payload => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    payload: payload
  };
};
