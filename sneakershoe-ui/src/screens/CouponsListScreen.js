import React from "react";
import Header from "../components/Header";
import CouponSection from "../components/CouponsList/CouponSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import Footer from "../components/Footer";
import Toast from "../components/LoadingError/Toast";
import { Link } from "react-router-dom";
import ExtraData from "../components/homeComponents/ExtraData";

const CouponsListScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Toast />
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
      {/* <ExtraData /> */}
      <CouponSection keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default CouponsListScreen;
