import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import EditCouponMain from "./../components/coupons/EditCoupon";

const CouponEditScreen = ({ match }) => {
  const couponId =  match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditCouponMain couponId={couponId} />
      </main>
    </>
  );
};
export default CouponEditScreen;
