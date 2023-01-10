import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { validatePassword } from "../components/homeComponents/Validation";
import Message from "../components/LoadingError/Error";
import InlineError from "../components/LoadingError/InlineError";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
// import { login } from "./../Redux/Actions/UserAction";

const ResetPassword = ({ location, history }) => {
  window.scrollTo(0, 0);

  const [password, setPassword] = useState("");

  const [passwordConfirm, setPasswordConfirm] = useState("");


//   const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    //Validation
    // validatePassword({ password, passwordConfirm, setPasswordError, setPasswordError });

    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect, password, passwordConfirm]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(login(email));
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* {passwordError && <InlineError error={passwordError} />} */}
          </div>
          <div>
            <input
              type="passwordConfirm"
              placeholder="Password Confirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            {/* {passwordConfirmError && <InlineError error={passwordConfirmError} />} */}
          </div>
          <button type="submit">Reset Password</button>
          {/* <p>
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
            >
              Back To Login
            </Link>
          </p> */}
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
