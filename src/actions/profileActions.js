import axios from "axios";
import { toast } from "react-toastify";
import { PROFILE_FETCHED, PROFILE_EDIT_SUCCESS } from "./types";

export const getProfileAction = () => {
  return async dispatch => {
    return axios
      .get(
        `https://ah-backend-prime-staging.herokuapp.com/api/v1/profiles/${
          sessionStorage.username
        }`,
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.token
          }
        }
      )
      .then(function(response) {
        const data = response.data.profile;
        dispatch({
          type: PROFILE_FETCHED,
          payload: data
        });
      });
  };
};

export const editProfileAction = data => {
  return async dispatch => {
    return axios
      .put(
        `https://ah-backend-prime-staging.herokuapp.com/api/v1/profiles/${
          sessionStorage.username
        }/edit`,
        data,
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.token
          }
        }
      )
      .then(function(response) {
        toast.success("Profile updated successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: false
        });
        dispatch({
          type: PROFILE_EDIT_SUCCESS,
          payload: response.data.profile
        });
      });
  };
};
