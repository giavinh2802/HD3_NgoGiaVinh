import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsListScreen from "./screens/ProductsListScreen";
import CouponsListScreen from "./screens/CouponsListScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import HomePageScreen from "./screens/HomePageScreen"
import NewsScreen from "./screens/NewsScreen"
import Orders from "./components/profileComponents/Orders"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePageScreen} exact />
        <Route path="/products-list" component={ProductsListScreen} exact />
        <Route path="/coupons-list" component={CouponsListScreen} exact />
        <Route path="/search/:keyword" component={ProductsListScreen} exact />
        <Route path="/page/:pagenumber" component={ProductsListScreen} exact />
        <Route path="/page-c/:pagenumber-c" component={CouponsListScreen} exact />
        <Route path="/search/:keyword/page/:pageNumber" component={ProductsListScreen} exact />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/news" component={NewsScreen} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password/:id/:token" component={ResetPassword} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <PrivateRoute path="/shipping" component={ShippingScreen} />
        <PrivateRoute path="/payment" component={PaymentScreen} />
        <PrivateRoute path="/placeorder" component={PlaceOrderScreen} />
        <PrivateRoute path="/order/:id" component={OrderScreen} />
        {/* <PrivateRoute path="/order/:pagenumber" component={Orders} exact /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
