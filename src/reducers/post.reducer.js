import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  GET_POSTS_BEGIN,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  GET_USER_POSTS_BEGIN,
  GET_USER_POSTS_ERROR,
  GET_USER_POSTS_SUCCESS,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from "../utils/actions.util";

const post_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_POSTS_BEGIN) {
    return { ...state, posts_loading: true };
  }
  if (action.type === GET_POSTS_SUCCESS) {
    return {
      ...state,
      posts_loading: false,
      posts: action.payload,
    };
  }
  if (action.type === GET_POSTS_ERROR) {
    return { ...state, posts_loading: false, posts_error: true };
  }
  if (action.type === GET_USER_POSTS_BEGIN) {
    return {
      ...state,
      user_posts_loading: true,
      user_posts_error: false,
    };
  }
  if (action.type === GET_USER_POSTS_SUCCESS) {
    return {
      ...state,
      user_posts: action.payload,
      user_posts_error: true,
    };
  }
  if (action.type === GET_USER_POSTS_ERROR) {
    return {
      ...state,
      user_posts_loading: false,
      user_posts_error: true,
    };
  }
  if (action.type === CREATE_POST) {
    return {
      ...state,
      posts: action.payload,
    };
  }
  if (action.type === UPDATE_POST) {
    return {
      ...state,
      posts: action.payload,
    };
  }
  if (action.type === DELETE_POST) {
    return {
      ...state,
      posts: action.payload,
    };
  }
};

export default post_reducer;
