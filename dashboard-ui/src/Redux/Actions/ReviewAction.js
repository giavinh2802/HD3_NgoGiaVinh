import {
    REVIEW_DELETE_FAIL,
    REVIEW_DELETE_REQUEST,
    REVIEW_DELETE_SUCCESS,
    REVIEW_LIST_FAIL,
    REVIEW_LIST_REQUEST,
    REVIEW_LIST_SUCCESS,
  } from "../Constants/ReviewConstants";
  import axios from "axios";
  import { logout } from "./UserAction";
  
  //LIST REVIEW
  export const listReviews = () => async (dispatch, getState) => {
    try {
      dispatch({ type: REVIEW_LIST_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/reviews/all`, config);
  
      dispatch({ type: REVIEW_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: REVIEW_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  // DELETE REVIEW
  export const deleteReview = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: REVIEW_DELETE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      await axios.delete(`/api/reviews/${id}`, config);
  
      dispatch({ type: REVIEW_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: REVIEW_DELETE_FAIL,
        payload: message,
      });
    }
  };
  
  