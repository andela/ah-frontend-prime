import axios from "axios";
import { FETCH_ARTICLES_SUCCESS } from "./types";

export const getArticlesAction = () => dispatch => {
  return axios
    .get("https://my-json-server.typicode.com/patrickf949/demo/posts")
    .then(response => {
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: response.data
      });
    });
};
