import axios from "axios";
import { ARTICLE_SUCCESS, ARTICLE_FAIL } from "./types";
import { toast } from "react-toastify";

export const successCreateArticle = data => {
  return {
    type: ARTICLE_SUCCESS,
    payload: data.article.slug
  };
};

export const articleCreateEditAction = (article, url, method, props) => {
  return async dispatch => {
    try {
      const response = await axios({
        method: method,
        url: url,
        data: article,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
      });

      toast.dismiss();
      dispatch(successCreateArticle(response.data));
      props.history.push("/article/" + response.data.article.slug);
    } catch (error) {
      if (error.response) {
        dispatch({
          type: ARTICLE_FAIL
        });
        toast.dismiss();
        const errors = error.response.data.errors;
        for (var key in errors) {
          toast.error(`${key}: ${errors[key]}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: false,
            hideProgressBar: false
          });
        }
      }
    }
  };
};
