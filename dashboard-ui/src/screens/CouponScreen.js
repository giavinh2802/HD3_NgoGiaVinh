import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import CouponMain from "../components/coupons/CouponMain";

const OrderScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <CouponMain />
      </main>
    </>
  );
};

export default OrderScreen;
