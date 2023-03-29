import axios from "axios";
import React, { useEffect, useReducer } from "react";
import reducer from "../reducers/post.reducer";
import {
  GET_POSTS_BEGIN,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  GET_USER_POSTS_BEGIN,
  GET_USER_POSTS_ERROR,
  GET_USER_POSTS_SUCCESS,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  CREATE_POST,
  DELETE_POST,
} from "../utils/actions.util";

const initialState = {
  isSidebarOpen: false,
  posts_loading: false,
  posts_error: false,
  posts: [],
  user_posts_loading: false,
  user_posts_error: false,
  user_posts: [],
};

export const PostContext = React.createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchAllPosts = async () => {
    dispatch({ type: GET_POSTS_BEGIN });
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/post/fetch`
      );
      const fetchedPosts = response.data;
      dispatch({ type: GET_POSTS_SUCCESS, payload: fetchedPosts });
      console.log(response);
    } catch (error) {
      dispatch({ type: GET_POSTS_ERROR });
    }
  };

  const fetchUserPosts = async (url) => {
    dispatch({ type: GET_USER_POSTS_BEGIN });
    try {
      const response = await axios.get(url);
      const userPosts = response.data.posts;
      dispatch({ type: GET_USER_POSTS_SUCCESS, payload: userPosts });
    } catch (error) {
      dispatch({ type: GET_USER_POSTS_ERROR });
    }
  };

  const createPost = async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/post/create`,
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("currentUser")}`,
        },
      }
    );
    dispatch({ type: CREATE_POST, payload: response.data });
    fetchAllPosts();
  };

  const deletePost = async (data) => {
    const { userID, postID } = data;
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/delete/${userID}/${postID}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("currentUser")}`,
        },
      }
    );
    dispatch({ type: DELETE_POST, payload: response.data });
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const value = {
    ...state,
    openSidebar,
    closeSidebar,
    fetchUserPosts,
    fetchAllPosts,
    createPost,
    deletePost,
  };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
