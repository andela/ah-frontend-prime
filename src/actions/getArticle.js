import axios from "axios";
import { FETCH_ARTICLE_SUCCESS } from "./types";
import { getUsersProfileAction } from "./profileActions";

export const getArticleAction = slug => dispatch => {
  return axios
    .get(
      "https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/" + slug
    )
    .then(response => {
      dispatch(fetchArticlesSuccess(response.data));
      const username = response.data.article.author.username;
      sessionStorage.setItem("userview_name", username);
      dispatch(getUsersProfileAction(username));
    });
};

const fetchArticlesSuccess = payload => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    payload: payload
  };
};
