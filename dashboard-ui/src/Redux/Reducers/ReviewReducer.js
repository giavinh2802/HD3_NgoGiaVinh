import {
    REVIEW_DELETE_FAIL,
    REVIEW_DELETE_REQUEST,
    REVIEW_DELETE_SUCCESS,
    REVIEW_LIST_FAIL,
    REVIEW_LIST_REQUEST,
    REVIEW_LIST_SUCCESS,
  } from "../Constants/ReviewConstants";
  
  // ALL REVIEW
  export const reviewListReducer = (state = { reviews: [] }, action) => {
    switch (action.type) {
      case REVIEW_LIST_REQUEST:
        return { loading: true, reviews: [] };
      case REVIEW_LIST_SUCCESS:
        return {
          loading: false,
          reviews: action.payload,
        };
      case REVIEW_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // DELETE REVIEW
  export const reviewDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case REVIEW_DELETE_REQUEST:
        return { loading: true };
      case REVIEW_DELETE_SUCCESS:
        return { loading: false, success: true };
      case REVIEW_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  