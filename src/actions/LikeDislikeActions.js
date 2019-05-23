import axios from "axios";
import {
  LIKE_ARTICLE_FAILURE,
  LIKE_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_FAILURE,
  DISLIKE_ARTICLE_SUCCESS
} from "./types";

export const likeArticle = slug => {
  return async dispatch => {
    const body = {};
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-type": "application/json"
    };
    return await axios
      .post(
        `https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/${slug}/like/`,
        body,
        { headers: headers }
      )
      .then(data => {
        if (data.data.author) {
          dispatch({
            type: LIKE_ARTICLE_SUCCESS,
            payload: data.data
          });
        } else {
          dispatch({
            type: LIKE_ARTICLE_FAILURE,
            payload: "Failed to like article"
          });
        }
      });
  };
};

export const dislikeArticle = slug => {
  return async dispatch => {
    const body = {};
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      "Content-type": "application/json"
    };
    return await axios
      .post(
        `https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/${slug}/dislike/`,
        body,
        { headers: headers }
      )
      .then(data => {
        if (data.data.author) {
          dispatch({
            type: DISLIKE_ARTICLE_SUCCESS,
            payload: data.data
          });
        } else {
          dispatch({
            type: DISLIKE_ARTICLE_FAILURE,
            payload: "Failed to dislike article"
          });
        }
      });
  };
};
