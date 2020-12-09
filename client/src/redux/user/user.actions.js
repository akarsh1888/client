import { UserTypes } from "./user.types";
import axios from "axios";
import setAuthToken from "../../utils/setAuthTokens";
import jwt_decode from "jwt-decode";
import baseUrlAuth from "../../utils/baseUrlAuth";
import { toast } from "react-toastify";

export const signupUser = (userData) => {
  return async (dispatch) => {
    try {
      console.log(userData);
      const res = await axios.post(`${baseUrlAuth}/signup`, userData);
      console.log(res.data);
      if (res.data.status === "ok") {
        dispatch(setNotify(res.data.messages, "success"));
        dispatch({ type: "CLEAR_ERROR" });
        setTimeout(() => {
          window.location.href = "/sign";
        }, 5000);
      } else {
        dispatch(setNotify(res.data.data, "error"));
        dispatch({ type: "SET_ERROR", error: res.data.data });
      }
    } catch (error) {
      dispatch(setNotify("Server Error Registering User", "error"));
      dispatch({ type: "SET_ERROR", error: error.message });
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch({
      type: UserTypes.GET_LOGIN_REQUEST,
    });
    try {
      const res = await axios.post(`${baseUrlAuth}/login`, userData);
      console.log(res.data);
      if (res.data.status === "ok") {
        const token = res.headers.authorization;
        //Set token to local storage
        localStorage.setItem("jwtToken", token);
        //Set token to auth header
        setAuthToken(token);
        //Decode token to get user data
        const decoded = jwt_decode(token);

        dispatch(setNotify(res.data.messages, "success"));

        dispatch({
          type: UserTypes.GET_LOGIN_REQUEST_SUCCESS,
          payload: decoded,
        });
        dispatch({
          type: "CLEAR_ERROR",
        });
      } else {
        dispatch(setNotify(res.data.errors, "error"));
        dispatch({
          type: UserTypes.GET_LOGIN_REQUEST_FAILED,
          error: res.data.errors,
        });
      }
    } catch (error) {
      dispatch(setNotify("Our Servers are not responding", "error"));
      dispatch({
        type: UserTypes.GET_LOGIN_REQUEST_FAILED,
        error: error,
      });
    }
  };
};

//Set logged in user
export const setCurrentUser = (decoded) =>
  decoded
    ? {
        type: UserTypes.GET_LOGIN_REQUEST_SUCCESS,
        payload: decoded,
      }
    : {
        type: UserTypes.GET_LOGIN_REQUEST_FAILED,
      };

//Logout user
export const logoutUser = () => (dispatch) => {
  //Remove token
  localStorage.removeItem("jwtToken");
  //Rmeove auth header for future requests
  setAuthToken(false);
  //Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser(null));
};

export const setNotify = (message, toastType) => {
  return (dispatch) => {
    toast[toastType](`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    dispatch({
      type: "NOTIFY",
      payload: message,
    });
  };
};
