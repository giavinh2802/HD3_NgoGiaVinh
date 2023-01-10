import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { register } from "../Redux/Actions/UserAction";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../components/homeComponents/Validation";
import InlineError from "../components/LoadingError/InlineError";
import { SendEmailRegister } from "../components/API/SendEmailRegister";
import Toast from "../components/LoadingError/Toast";
import { toast } from "react-toastify";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const Register = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [send, setSend] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    //Validation
    validateName({ name, setNameError });
    validatePhone({ phone, setPhoneError });
    validateEmail({ email, setEmailError });

    if (userInfo) {
      toast.success(send.msg, ToastObjects);
      history.push(redirect);
    }
  }, [userInfo, history, redirect, name, phone, email, password, send]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !nameError &&
      !emailError &&
      !phoneError &&
      name !== "" &&
      phone !== "" &&
      email !== "" &&
      password !== ""
    ) {
      dispatch(register(name, email, password, phone));
      SendEmailRegister({ email, name, phone, setSend });
    }
  };

  return (
    <>
      <Toast />
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
              type="text"
              placeholder="Enter Person Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <InlineError error={nameError} />}
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && <InlineError error={phoneError} />}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <InlineError error={emailError} />}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
