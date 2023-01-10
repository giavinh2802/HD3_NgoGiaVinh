import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { validateEmail } from "../components/homeComponents/Validation";
import Message from "../components/LoadingError/Error";
import InlineError from "../components/LoadingError/InlineError";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { toast } from "react-toastify";
// import { login } from "./../Redux/Actions/UserAction";

const ForgotPassword = ({ location, history }) => {
  window.scrollTo(0, 0);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");

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

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch("/sendpasswordlink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.status === 201) {
      setEmail("");
      setMessage(true);
    } else {
      toast.error("Invalid User");
    }

    // dispatch(email);
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        {message ? (
          <p style={{ color: "green", fontWeight: "bold" }}>
            Password reset link send successfully
          </p>
        ) : (
          ""
        )}
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <InlineError error={emailError} />}
          </div>
          <button type="submit">Send</button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Back To Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
