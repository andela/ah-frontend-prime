import axios from "axios";

import { toast } from "react-toastify";
import { LOGIN_STARTED, LOGIN_FAIL, SUCCESSFUL } from "./types";

export const successLogin = data => {
  return {
    type: SUCCESSFUL,
    payload: data.data.user.token
  };
};

export const userLoginRequest = userData => async dispatch => {
  toast.dismiss();
  dispatch({
    type: LOGIN_STARTED
  });
  try {
    const response = await axios.post(
      "https://ah-backend-prime-staging.herokuapp.com/api/v1/users/login/",
      userData
    );

    sessionStorage.setItem("token", response.data.user.token);
    sessionStorage.setItem("username", response.data.user.username);
    dispatch(successLogin(response));
    toast.success(`Welcome ${response.data.user.username}. Login Successful`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      hideProgressBar: false
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });
    const errors = error.response.data.errors;

    errors.error.forEach(err => {
      toast.error(` ${err}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
        hideProgressBar: false
      });
    });
  }
};
