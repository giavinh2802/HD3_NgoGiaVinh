import React, { useEffect, memo } from "react";
import { Redirect, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
  const userLogin = useSelector((state) => state?.userLogin);
  const { userInfo } = userLogin;
  console.log("user", userInfo);
  return (
    <Route
      {...rest}
      component={(props) => {
        if (userInfo && userInfo.isAdmin) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/login"} />;
        }
      }}
    />

  );
}

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const userLogin = useSelector((state) => state?.userLogin);
//   const { userInfo } = userLogin;
//   console.log("user", userInfo);

//   useEffect((props) => {
//     if (userInfo && userInfo.isAdmin) {
//       return <Component {...props} />;
//     } else {
//       return <Redirect to={"/login"} />;
//     }
//   }, [userInfo]);

//   return (
//     <Route {...rest} />
//   );
// }
