import {
    COUPON_LIST_REQUEST,
    COUPON_LIST_SUCCESS,
    COUPON_LIST_FAIL,
    COUPON_DETAILS_REQUEST,
    COUPON_DETAILS_SUCCESS,
    COUPON_DETAILS_FAIL,
  } from "../Constants/CouponConstants";
  
  //COUPON LIST
  export const couponListReducer = (state = { coupons: [] }, action) => {
    switch (action.type) {
      case COUPON_LIST_REQUEST:
        return { loading: true, coupons: [] };
      case COUPON_LIST_SUCCESS:
        return {
          loading: false,
          pages: action.payload.pages,
          page: action.payload.page,
          coupons: action.payload.coupons,
        };
      case COUPON_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  //SINGLE COUPON
  export const couponDetailsReducer = (
    state = { coupon: { } },
    action
  ) => {
    switch (action.type) {
      case COUPON_DETAILS_REQUEST:
        return { ...state, loading: true };
      case COUPON_DETAILS_SUCCESS:
        return { loading: false, coupon: action.payload };
      case COUPON_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  //PRODUCT REVIEW CREATE
//   export const productCreateReviewReducer = (state = {}, action) => {
//     switch (action.type) {
//       case COUPON_CREATE_REVIEW_REQUEST:
//         return { loading: true };
//       case COUPON_CREATE_REVIEW_SUCCESS:
//         return { loading: false, success: action.payload };
//       case COUPON_CREATE_REVIEW_FAIL:
//         return { loading: false, error: action.payload };
//       case COUPON_CREATE_REVIEW_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };
  