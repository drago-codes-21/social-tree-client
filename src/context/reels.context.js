import axios from "axios";
import React, { useReducer } from "react";
import reducer from "../reducers/reels.reducer";
import {
  GET_ALL_REELS,
  GET_USER_REELS,
  UPLOAD_REEL,
  GET_REELS_ERROR,
} from "../actions";

const initialState = {
  single_reel: {},
  reels: [],
  user_reels: [],
};

export const ReelsContext = React.createContext();

export const ReelsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchAllReels = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/post/fetch`
      );
      const fetchedPosts = response.data;
      dispatch({ type: GET_ALL_REELS, payload: fetchedPosts });
    } catch (error) {
      dispatch({ type: GET_REELS_ERROR });
    }
  };
  const fetchUserReels = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/post/fetch`
      );
      const fetchedPosts = response.data;
      dispatch({ type: GET_USER_REELS, payload: fetchedPosts });
    } catch (error) {
      dispatch({ type: GET_REELS_ERROR });
    }
  };
  const uploadReel = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/post/fetch`
      );
      const fetchedPosts = response.data;
      dispatch({ type: UPLOAD_REEL, payload: fetchedPosts });
    } catch (error) {
      dispatch({ type: GET_REELS_ERROR });
    }
  };

  const value = { ...state, fetchAllReels, fetchUserReels, uploadReel };
  return (
    <ReelsContext.Provider value={value}>{children}</ReelsContext.Provider>
  );
};
