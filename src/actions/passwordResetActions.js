import axios from "axios";
import { toast } from "react-toastify";
import {
  ERROR_DURING_SENDING_LINK,
  IS_LOADING,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  SENDPASSWORD_RESET_LINK
} from "./types";

export const sendPasswordResetLink = data => async dispatch => {
  dispatch({
    type: IS_LOADING
  });
  return await axios
    .post(
      `https://ah-backend-prime-staging.herokuapp.com/api/v1/users/password/reset/email/`,
      data
    )
    .then(res => {
      dispatch({
        type: SENDPASSWORD_RESET_LINK,
        payload: res.data
      });
      toast.dismiss();
      toast.success(`${res.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR_DURING_SENDING_LINK,
        payload: error.response.data
      });
      toast.dismiss();
      toast.error(`${error.response.data.error}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
        hideProgressBar: false
      });
    });
};

export const passwordReset = (data, token) => async dispatch => {
  dispatch({
    type: IS_LOADING
  });
  return await axios
    .put(
      `https://ah-backend-prime-staging.herokuapp.com/api/v1/users/password/${token}/reset/`,
      {
        user: data
      }
    )
    .then(res => {
      dispatch({
        type: RESET_PASSWORD,
        payload: res.data
      });
      toast.dismiss();
      toast.success(`${res.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false
      });
    })
    .catch(err => {
      dispatch({
        type: RESET_PASSWORD_ERROR,
        payload: { error: "there was error during the password reset" }
      });
      toast.dismiss();
      toast.error("there was error during the password reset", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
        hideProgressBar: false
      });
    });
};
