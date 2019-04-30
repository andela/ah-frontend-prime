import { combineReducers } from "redux";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  // A blank reducer was added in order for the default snapshot test to pass.
  // When an actual reducer is created, this would have to be replaced with the
  // reducer object that was created.
  blank: function(state, action) {
    if (state == null) state = [];
    return state;
  }
});
