import axios from "axios";
import { FETCH_ARTICLES_SUCCESS } from "./types";

export const getArticlesAction = (
  url = "https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/"
) => async dispatch => {
  return axios.get(url).then(response => {
    dispatch(fetchArticlesSuccess(response.data));
  });
};

const fetchArticlesSuccess = payload => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: payload
  };
};
