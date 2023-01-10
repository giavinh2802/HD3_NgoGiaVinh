import React from "react";
import { Link } from "react-router-dom";

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
              Trở Về Trang Chủ
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
