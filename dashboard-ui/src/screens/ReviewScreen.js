import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import ReviewMain from "../components/reviews/ReviewMain.js";

const OrderScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <ReviewMain />
      </main>
    </>
  );
};

export default OrderScreen;
