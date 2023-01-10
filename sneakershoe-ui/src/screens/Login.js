import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { validateEmail } from "../components/homeComponents/Validation";
import Message from "../components/LoadingError/Error";
import InlineError from "../components/LoadingError/InlineError";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/UserAction";

const Login = ({ location, history }) => {
  window.scrollTo(0, 0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    //Validation
    validateEmail({ email, setEmailError });

    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect, email]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
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
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <InlineError error={emailError} />}
          </div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p
            className=" d-flex justify-content-end my-2"
            style={{ fontSize: ".9rem", color: "#349eff !important" }}
          >
            <Link
              to={
                redirect
                  ? `/forgot-password?redirect=${redirect}`
                  : "/forgot-password"
              }
            >
              Forget Password
            </Link>
          </p>
          <button type="submit">Login</button>
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Don't have an account? <strong>Sign Up</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
