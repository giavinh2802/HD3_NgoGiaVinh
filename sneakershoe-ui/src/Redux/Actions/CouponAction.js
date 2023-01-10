import axios from "axios";
import {
  COUPON_LIST_FAIL,
  COUPON_LIST_REQUEST,
  COUPON_LIST_SUCCESS,
  COUPON_DETAILS_FAIL,
  COUPON_DETAILS_REQUEST,
  COUPON_DETAILS_SUCCESS,
  // COUPON_CREATE_REVIEW_REQUEST,
  // COUPON_CREATE_REVIEW_SUCCESS,
  // COUPON_CREATE_REVIEW_FAIL,
} from "../Constants/CouponConstants";
// import { logout } from "./UserAction";

// COUPON LIST
export const listCoupon =
  (keywordC = " ", pageNumberC = " ") =>
  async (dispatch) => {
    try {
      dispatch({ type: COUPON_LIST_REQUEST });
      const { data } = await axios.get(
        `/api/coupons/?&pageNumber=${pageNumberC}&keyword=${keywordC}`
      );
      dispatch({ type: COUPON_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: COUPON_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//SINGLE COUPON
export const listCouponDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: COUPON_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/coupons/${id}`);
    dispatch({ type: COUPON_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COUPON_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.message.response.data.message
          : error.message,
    });
  }
};

//PRODUCT REVIEW CREATE
// export const createProductReview =
//   (productId, review) => async (dispatch, getState) => {
//     try {
//       dispatch({ type: COUPON_CREATE_REVIEW_REQUEST });

//       const {
//         userLogin: { userInfo },
//       } = getState();

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       };

//       await axios.post(`/api/products/${productId}/review`, review, config);
//       dispatch({ type: COUPON_CREATE_REVIEW_SUCCESS });

//       localStorage.removeItem("cartItems");
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;
//       if (message === "Not authorized, token failed") {
//         dispatch(logout());
//       }
//       dispatch({
//         type: COUPON_CREATE_REVIEW_FAIL,
//         payload: message,
//       });
//     }
//   };
