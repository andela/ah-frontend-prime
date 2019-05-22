import axios from "axios";
import { ARTICLE_SUCCESS, ARTICLE_FAIL } from "./types";
import { toast } from "react-toastify";

export const successCreateArticle = data => {
  return {
    type: ARTICLE_SUCCESS,
    payload: data
  };
};

export const articleCreateEditAction = (
  article,
  url,
  method,
  props,
  action
) => {
  return async dispatch => {
    try {
      const response = await axios({
        url: url,
        method: method,
        data: article,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
      });
      dispatch(successCreateArticle(response.data));
      toast.dismiss();
      toast.success(
        `${sessionStorage.getItem("username")} your article has been ${action}`,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: false,
          onClose: props.history.push(
            "/article/" +
              (response.data.article
                ? response.data.article.slug
                : response.data.slug)
          )
        }
      );
      
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
