import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

function PublicRoute({ component: Component, ...rest }) {
  const { userInfo } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return !userInfo ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        );
      }}
    />
  );
}

export default PublicRoute;
