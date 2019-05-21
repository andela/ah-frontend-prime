import axios from "axios";
import { FETCH_ARTICLES_SUCCESS } from "./types";

export const getArticlesAction = (kwargs = " ") => dispatch => {
  return axios
    .get(
      "https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/" + kwargs
    )
    .then(response => {
      dispatch(fetchArticlesSuccess(response.data.results));
    });
};

const fetchArticlesSuccess = payload => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: payload
  };
};
