import {
  PROFILE_FETCHING,
  PROFILE_FETCH_FAILED,
  PROFILE_FETCHED,
  PROFILE_EDIT_SUCCESS
} from "../actions/types";

const initialState = {
  profile: null,
  isLoading: false,
  message: null,
  isUpdating: false,
  upDateSuccess: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_FETCHED:
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
        isUpdating: false,
        message: true
      };
    case PROFILE_FETCHING:
      return {
        ...state,
        isLoading: true,
        isUpdating: false,
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
    default:
      return state;
  }
};
export default profileReducer;
