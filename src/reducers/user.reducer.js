import {
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  AUTH_USER_BEGIN,
  AUTH_USER_ERROR,
  LOGOUT_USER,
  SET_USER_FROM_STORAGE,
} from "../utils/actions.util";

const user_reducer = (state, action) => {
  if (action.type === AUTH_USER_BEGIN) {
    return {
      ...state,
      user_loading: true,
      user_error: false,
    };
  }
  if (
    action.type === REGISTER_USER_SUCCESS ||
    action.type === LOGIN_USER_SUCCESS
  ) {
    return {
      ...state,
      user_loading: false,
      currentUser: action.payload,
    };
  }
  if (action.type === SET_USER_FROM_STORAGE) {
    return {
      ...state,
      user_loading: false,
      currentUser: action.payload,
    };
  }
  if (action.type === AUTH_USER_ERROR) {
    return {
      ...state,
      user_loading: false,
      user_error: true,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      currentUser: null,
    };
  }
};

export default user_reducer;
