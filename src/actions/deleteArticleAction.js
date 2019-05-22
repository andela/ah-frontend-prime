import axios from "axios";
import { DELETE_ARTICLE_SUCCESS } from "./types";
import { toast } from "react-toastify";

export const deleteArticleAction = (slug, props) => dispatch => {
  return axios({
    url:
      "https://ah-backend-prime-staging.herokuapp.com/api/v1/articles/" + slug,
    method: "delete",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`
    }
  }).then(response => {
    toast.success(response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      hideProgressBar: false,
      onClose: () => props.history.go(0)
    });
    dispatch(deleteArticleSuccess(response.data));

    // setTimeout(props.history.go(0), 5000);
  });
};

const deleteArticleSuccess = payload => {
  return {
    type: DELETE_ARTICLE_SUCCESS,
    payload: payload
  };
};
