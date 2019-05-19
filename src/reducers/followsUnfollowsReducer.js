import {
  FOLLOWERS_LIST,
  FOLLOWING_LIST,
  FOLLOWERS_LIST_FAILED,
  FOLLOWING_LIST_FAILED
} from "../actions/types";

const initialState = {
  followers: [],
  following: []
};

const followsUnfollowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWERS_LIST:
      return {
        ...state,
        followers: action.payload
      };
    case FOLLOWING_LIST:
      return {
        ...state,
        following: action.payload
      };
    case FOLLOWERS_LIST_FAILED:
      return {
        ...state,
        followers: action.payload
      };
    case FOLLOWING_LIST_FAILED:
      return {
        ...state,
        following: action.payload
      };
    default:
      return state;
  }
};

export default followsUnfollowsReducer;
