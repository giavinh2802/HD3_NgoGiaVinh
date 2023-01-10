import {
  COUPON_CREATE_FAIL,
  COUPON_CREATE_REQUEST,
  COUPON_CREATE_SUCCESS,
  COUPON_DELETE_FAIL,
  COUPON_DELETE_REQUEST,
  COUPON_DELETE_SUCCESS,
  COUPON_EDIT_FAIL,
  COUPON_EDIT_REQUEST,
  COUPON_EDIT_SUCCESS,
  COUPON_LIST_FAIL,
  COUPON_LIST_REQUEST,
  COUPON_LIST_SUCCESS,
  COUPON_UPDATE_FAIL,
  COUPON_UPDATE_REQUEST,
  COUPON_UPDATE_SUCCESS,
} from "../Constants/CouponConstants";
import axios from "axios";
import { logout } from "./UserAction";

//LIST COUPONS
export const listCoupons = () => async (dispatch, getState) => {
  try {
    dispatch({ type: COUPON_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/coupons/all`, config);

    dispatch({ type: COUPON_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: COUPON_LIST_FAIL,
      payload: message,
    });
  }
};

// DELETE COUPON
export const deleteCoupon = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: COUPON_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/coupons/${id}`, config);

    dispatch({ type: COUPON_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: COUPON_DELETE_FAIL,
      payload: message,
    });
  }
};

// CREATE COUPON
export const createCoupon =
  (index, name, code, validityTime, percentage, minAmount, type) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: COUPON_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/coupons/`,
        { index, name, code, validityTime, percentage, minAmount, type },
        config
      );

      dispatch({ type: COUPON_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: COUPON_CREATE_FAIL,
        payload: message,
      });
    }
  };

// EDIT COUPON
export const editCoupon = (id) => async (dispatch) => {
  try {
    dispatch({ type: COUPON_EDIT_REQUEST });
    const { data } = await axios.get(`/api/coupons/${id}`);
    dispatch({ type: COUPON_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: COUPON_EDIT_FAIL,
      payload: message,
    });
  }
};

//UPDATE COUPON
export const updateCoupon = (coupon) => async (dispatch, getState) => {
  try {
    dispatch({ type: COUPON_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/coupons/${coupon._id}`,
      coupon,
      config
    );

    dispatch({ type: COUPON_UPDATE_SUCCESS, payload: data });
    dispatch({ type: COUPON_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: COUPON_UPDATE_FAIL,
      payload: message,
    });
  }
};
