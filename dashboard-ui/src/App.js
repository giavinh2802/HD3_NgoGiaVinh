import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
//PRODUCT
import ProductScreen from "./screens/ProductScreen";
import AddProduct from "./screens/AddProduct";
import ProductEditScreen from "./screens/ProductEditScreen";
//CATEGORY
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryEditScreen from "./screens/CategoryEditScreen";
//ORDER
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
//COUPON
import CouponsScreen from "./screens/CouponScreen";
import AddCoupons from "./screens/AddCoupon";
import CouponEditScreen from "./screens/CouponEditScreen";
//REVIEW
import ReviewsScreen from "./screens/ReviewScreen";
//
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import NotFound from "./screens/NotFound";
import { listProducts } from "./Redux/Actions/ProductAction";
import { listOrders } from "./Redux/Actions/OrderAction";
import { listCategories } from "./Redux/Actions/CategoryAction";
import { listCoupons } from "./Redux/Actions/CouponAction";
import PrivateRoute from "./PrivateRoute";
import ExtraData from "./components/products/ExtraData";

function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
      dispatch(listOrders());
      dispatch(listCategories());
      dispatch(listCoupons());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <>
          <PrivateRoute path="/" component={HomeScreen} exact />
          <PrivateRoute
            path="/products/:pagenumber"
            component={ProductScreen}
            exact
          />
          <PrivateRoute path="/products" component={ProductScreen} />
          <PrivateRoute path="/addproduct" component={AddProduct} />
          <PrivateRoute
            path="/product/:id/edit"
            component={ProductEditScreen}
          />
          <PrivateRoute path="/categories" component={CategoriesScreen} />
          <PrivateRoute
            path="/category/:id/edit"
            component={CategoryEditScreen}
          />
          <PrivateRoute path="/orders" component={OrderScreen} />
          <PrivateRoute path="/order/:id" component={OrderDetailScreen} />
          <PrivateRoute
            path="/orders/:pagenumber"
            component={OrderScreen}
            exact
          />
          <PrivateRoute path="/coupons" component={CouponsScreen} />
          <PrivateRoute path="/addcoupon" component={AddCoupons} />
          <PrivateRoute path="/coupon/:id/edit" component={CouponEditScreen} />
          <PrivateRoute path="/reviews" component={ReviewsScreen} />
          <PrivateRoute path="/users" component={UsersScreen} />
          <PrivateRoute path="/extra" component={ExtraData} />
          {/* <PrivateRoute path="*" component={NotFound} /> */}
          <Route path="/login" component={Login} />
        </>
      </Router>
    </>
  );
}

export default App;
