import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

const NotFound = () => {
  const buttonStyle = {
    backgroundColor:"var(--main-color)",
    height:"50px",
    borderRadius:"var(--border-radius)",
    boxShadow:"var(--box-shadow-dark: rgba(0, 0, 0, 0.2) 0px 5px 10px;)",
    border:"none",
  }
  const h4Style = {
    fontWeight: "bold",
    color: "var(--txt-color)"
  }
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
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <h4 style={h4Style} className="text-center mb-2 mb-sm-5">Page Not Found !</h4>
          <img
            style={{ width: "100%", height: "450px", objectFit: "contain" }}
            src="/images/404.png"
            alt="Not-found"
          />
          <button style={buttonStyle} className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
            <Link  to="/" className="text-white text-decoration-none">
              Trở Lại Trang Chủ
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
