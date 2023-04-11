import axios from "axios";
import React, { useReducer } from "react";
import reducer from "../reducers/user.reducer";
import {
  AUTH_USER_BEGIN,
  AUTH_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  LOGOUT_USER,
  SET_USER_FROM_STORAGE,
} from "../actions";

const initialState = {
  currentUser: null,
  user_loading: false,
  user_success: false,
  user_error: false,
};

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = (creds) => {
    dispatch({ type: AUTH_USER_BEGIN });
    try {
      const response = axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        creds,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const user = response.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: AUTH_USER_ERROR });
    }
  };
  const loginUser = async (creds) => {
    dispatch({ type: AUTH_USER_BEGIN });
    try {
      const { email, password } = creds;
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { email: email, password: password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data.user });
      localStorage.setItem("currentUser", response.data.token);
    } catch (error) {
      dispatch({ type: AUTH_USER_ERROR });
    }
  };
  const setUserFromStorage = async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/get/${id}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({ type: SET_USER_FROM_STORAGE, payload: response.data });
  };
  const logout = () => {
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem("currentUser");
  };

  return (
    <UserContext.Provider
      value={{ ...state, registerUser, loginUser, logout, setUserFromStorage }}
    >
      {children}
    </UserContext.Provider>
  );
};
