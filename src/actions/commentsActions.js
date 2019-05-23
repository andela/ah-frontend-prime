import {
  CREATE_COMMENTS,
  CREATE_COMMENTS_ERRORS,
  FETCH_COMMENTS,
  FETCH_COMMENTS_ERRORS
} from "./types";
import axios from "axios";
import { toast } from "react-toastify";

export const articleComments = (data, slug) => async dispatch => {
  return await axios
    .post(
      `https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/${slug}/comments/0/`,
      data,
      {
        headers: {
          Authorization: "Bearer " + sessionStorage.token
        }
      }
    )
    .then(res => {
      dispatch({
        type: CREATE_COMMENTS,
        payload: res.data
      });
      toast.dismiss();
      toast.success("thanks for your view", {
        hideProgressBar: false,
        autoClose: 3000
      });
    })
    .catch(errors => {
      dispatch({
        type: CREATE_COMMENTS_ERRORS,
        payload: errors.response.data
      });
    });
};
export const fetchComments = slug => async dispatch => {
  return await axios
    .get(
      ` https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/${slug}/comments/0/`,
      {
        headers: {
          Authorization: "Bearer " + sessionStorage.token
        }
      }
    )
    .then(res => {
      dispatch({
        type: FETCH_COMMENTS,
        payload: res.data.message
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_COMMENTS_ERRORS,
        payload: { errors: "error fetching your comments" }
      });
    });
};
