import {
  PROFILE_FETCHING,
  PROFILE_FETCH_FAILED,
  PROFILE_FETCHED,
  PROFILE_EDIT_SUCCESS,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_FAILURE,
  UNFOLLOW_SUCCESS
} from "../actions/types";

const initialState = {
  profile: null,
  isLoading: false,
  message: null,
  isUpdating: false,
  upDateSuccess: false,
  followers_no: 0,
  following_no: 0,
  isfollowing: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_FETCHED:
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
        isUpdating: false,
        message: true,
        isfollowing: action.payload.following
      };
    case PROFILE_FETCHING:
      return {
        ...state,
        isLoading: true,
        isUpdating: false
      };
    case PROFILE_EDIT_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
        isUpdating: true,
        upDateSuccess: true
      };
    case PROFILE_FETCH_FAILED:
      return {
        ...state,
        message: action.payload
      };
    case FOLLOW_SUCCESS:
      return {
        ...state,
        isfollowing: "True",
        message: action.payload
      };
    case FOLLOW_FAILURE:
      return {
        ...state,
        isfollowing: "False",
        message: action.payload
      };
    case UNFOLLOW_SUCCESS:
      return {
        ...state,
        isfollowing: "False",
        message: action.payload
      };
    case UNFOLLOW_FAILURE:
      return {
        ...state,
        isfollowing: "True",
        message: action.payload
      };

    default:
      return state;
  }
};
export default profileReducer;
