import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import AddCoupon from "../components/coupons/AddCoupon";

const AddCoupons = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddCoupon />
      </main>
    </>
  );
};

export default AddCoupons;
