import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userListReducer, userLoginReducer } from "./Reducers/UserReducer";
import {
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productListReducer,
  productUpdateReducer,
} from "./Reducers/ProductReducers";
import {
  orderDeliveredReducer,
  orderDetailsReducer,
  orderListReducer,
} from "./Reducers/OrderReducer";
import {
  categoryListReducer,
  categoryDeleteReducer,
  categoryCreateReducer,
  categoryEditReducer,
  categoryUpdateReducer,
} from "./Reducers/CategoryReducer";
import {
  couponListReducer,
  couponDeleteReducer,
  couponCreateReducer,
  couponEditReducer,
  couponUpdateReducer,
} from "./Reducers/CouponReducer";
const reducer = combineReducers({
  //User
  userLogin: userLoginReducer,
  userList: userListReducer,
  //Product
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productUpdate: productUpdateReducer,
  //Order
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver: orderDeliveredReducer,
  //Category
  categoryList: categoryListReducer,
  categoryDelete: categoryDeleteReducer,
  categoryCreate: categoryCreateReducer,
  categoryEdit: categoryEditReducer,
  categoryUpdate: categoryUpdateReducer,
  //Coupon
  couponList: couponListReducer,
  couponDelete: couponDeleteReducer,
  couponCreate: couponCreateReducer,
  couponEdit: couponEditReducer,
  couponUpdate: couponUpdateReducer,
  //Review
  // reviewList: reviewListReducer,
  // reviewDelete: reviewDeleteReducer,
});

//Login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
