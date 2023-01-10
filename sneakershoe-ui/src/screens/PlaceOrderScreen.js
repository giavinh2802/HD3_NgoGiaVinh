import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../Redux/Actions/OrderAction";
import { ORDER_CREATE_RESET } from "../Redux/Constants/OrderConstants";
import Header from "./../components/Header";
import Message from "./../components/LoadingError/Error";
import { FaUserTag, FaShippingFast } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const PlaceOrderScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //Calculate Price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(0);
  };

  cart.itemsPrice = Number(
    addDecimals(
      cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  );
  cart.shippingPrice = Number(cart.itemsPrice > 200000 ? 0 : 15000);
  cart.taxPrice = Number(addDecimals(Number((0.03 * cart.itemsPrice).toFixed(0))).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  }));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(0);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
      // history.push("/error");
    }
  }, [history, dispatch, success, order]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  return (
    <>
      <Header />
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <Link to="/">
                <div className="item-menu">
                  {" "}
                  <img alt="logo" width="54px" src="/images/LogoSneaker.png" />
                </div>
              </Link>
              <p>
                <strong>PANDA SNEAKER SHOP</strong>
              </p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row ">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i class="fas">
                    <FaUserTag />
                  </i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Khách Hàng</strong>
                </h5>
                <p>{userInfo.name}</p>
                <p>{userInfo.email}</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas">
                    <FaShippingFast />
                  </i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Chi Tiết Đơn Hàng</strong>
                </h5>
                <p>Shipping: {cart.shippingAddress.country}</p>
                <p>Pay method: {cart.paymentMethod}</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas">
                    <HiLocationMarker />
                  </i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Vận Chuyển Tới.</strong>
                </h5>
                <p>
                  Address: {cart.shippingAddress.city},{" "}
                  {cart.shippingAddress.address},{" "}
                  {cart.shippingAddress.postalCode}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {cart.cartItems.length === 0 ? (
              <Message variant="alert-info mt-5">
                Giỏ Hàng Đang Trống Đó
              </Message>
            ) : (
              <>
                {cart.cartItems.map((item, index) => (
                  <div className="order-product row" key={index}>
                    <div className="col-md-3 col-6">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="col-md-5 col-6 d-flex align-items-center">
                      <Link to={`/products/${item.product}`}>
                        <h6>{item.name}</h6>
                      </Link>
                    </div>
                    <div className=" mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column justify-content-center ">
                      <h6>Số Lượng</h6>
                      <h6>{item.qty}</h6>
                    </div>
                    <div className=" mt-3 mt-md-0 col-md-2 col-6 align-items-center  d-flex flex-column justify-content-center ">
                      <h6>Tổng Giá</h6>
                      <h6>
                        {Number(item.qty * item.price).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </h6>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Sản Phẩm</strong>
                  </td>
                  <td>
                    {cart.itemsPrice.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Giao Hàng</strong>
                  </td>
                  <td>
                    {cart.shippingPrice.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Phí TAX</strong>
                  </td>
                  <td>
                    {cart.taxPrice.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Tổng Tiền</strong>
                  </td>
                  <td>
                    {Number(
                      cart.totalPrice.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })
                    )}{" "}
                    đ
                  </td>
                </tr>
              </tbody>
            </table>
            {cart.cartItems.length === 0 ? null : (
              <button type="submit" onClick={placeOrderHandler}>
                ĐẶT HÀNG NGAY
              </button>
            )}
            {error && (
              <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
