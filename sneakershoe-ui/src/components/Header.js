import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../Redux/Actions/UserAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  //Sticky Header

  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY > 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <div
      id="myStickyHead"
      className={fix ? "sticky-head fixed" : "sticky-head"}
    >
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p><strong>Các sản phẩm HOT SALE đang được lên kệ !!!</strong></p>
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
      {/* Header */}

      <div className="header">
        <div
        // id="myStickyHead"
        // className={fix ? "sticky-head fixed" : "sticky-head"}
        >
          <div className="container">
            {/* MOBILE HEADER */}
            <div className="mobile-header">
              <div className="container ">
                <div className="row ">
                  <div className="col-6 d-flex align-items-center">
                    <Link className="navbar-brand" to="/">
                      <img alt="logo" src="/images/LogoSneaker.png" />
                    </Link>
                  </div>
                  <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                    {userInfo ? (
                      <div className="btn-group">
                        <button
                          type="button"
                          className="name-button dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fas fa-user"></i>
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="/profile">
                            Profile
                          </Link>

                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={logoutHandler}
                          >
                            Logout
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="btn-group">
                        <button
                          type="button"
                          className="name-button dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fas fa-user"></i>
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="/login">
                            Login
                          </Link>

                          <Link className="dropdown-item" to="/register">
                            Register
                          </Link>
                        </div>
                      </div>
                    )}

                    <Link to="/cart" className="cart-mobile-icon">
                      <i className="fas fa-shopping-bag"></i>
                      <span className="badge">{cartItems.length}</span>
                    </Link>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <form onSubmit={submitHandler} className="input-group">
                      <input
                        type="search"
                        className="form-control rounded search"
                        placeholder="Search here"
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                      <button type="submit" className="search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* PC HEADER */}
            <div className="pc-header">
              <div className="row">
                <div className="col-md-1 col-4 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img
                      alt="logo"
                      width="12px"
                      src="/images/LogoSneaker.png"
                    />
                  </Link>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                  <ul className="navmenu-list align-items-center justify-content-end">
                    <Link to="/products-list"><li className="item-menu">SẢN PHẨM</li></Link>
                    <Link to="/login"><li className="item-menu">BÀI VIẾT</li></Link>
                    <Link to="/coupons-list"><li className="item-menu">Khuyến Mãi</li></Link>
                    <Link to="/login"><li className="item-menu">LIÊN HỆ</li></Link>
                  </ul>
                </div>
                <div className="col-md-4 col-8 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Bạn cần tìm gì..."
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </form>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Hi, {userInfo.name}
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Cá Nhân
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          Thoát Tài Khoản
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Link to="/register">Đăng Kí</Link>
                      <Link to="/login">ĐĂNG NHẬP</Link>
                    </>
                  )}

                  <Link to="/cart">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
