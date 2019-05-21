import endpoints from "../urls";
import {
  GOOGLE_FAILURE,
  GOOGLE_LOGIN,
  FACEBOOK_FAILURE,
  FACEBOOK_LOGIN
} from "./types";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const facebooklogin = token => dispatch => {
  const body = {
    user_token: {
      auth_token: token
    }
  };

  const headers = {
    "Content-Type": "application/json"
  };
  return axios
    .post(endpoints.facebookLogin, body, { headers: headers })
    .then(data => {
      if (data.data.errors) {
        dispatch({
          type: FACEBOOK_FAILURE,
          payload: data.data
        });
      } else {
        if (data.data["auth_token"].username) {
          toast.success(
            `Welcome ${data.data["auth_token"].username}. Login Successful`,
            {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000,
              hideProgressBar: false
            }
          );
          sessionStorage.setItem("username", data.data["auth_token"].username);
          sessionStorage.setItem("email", data.data["auth_token"].email);
          dispatch({
            type: FACEBOOK_LOGIN,
            payload: data.data["auth_token"]
          });
        } else {
          toast.success(`${data.data["auth_token"]}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false
          });
        }
      }
    });
};

export const googlelogin = token => dispatch => {
  const body = {
    user_token: {
      auth_token: token
    }
  };

  const headers = {
    "Content-Type": "application/json"
  };
  return axios
    .post(endpoints.googleLogin, body, { headers: headers })
    .then(data => {
      if (data.data.errors) {
        dispatch({
          type: GOOGLE_FAILURE,
          payload: data.data
        });
      } else {
        if (data.data["auth_token"].username) {
          toast.success(
            `Welcome ${data.data["auth_token"].username}. Login Successful`,
            {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000,
              hideProgressBar: false
            }
          );
          sessionStorage.setItem("username", data.data["auth_token"].username);
          sessionStorage.setItem("email", data.data["auth_token"].email);
          dispatch({
            type: GOOGLE_LOGIN,
            payload: data.data["auth_token"]
          });
        } else {
          toast.success(`${data.data["auth_token"]}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false
          });
        }
      }
    });
};
