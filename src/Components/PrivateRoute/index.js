import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { ProfileContext } from "../../config";

function PrivateRoute({ children, ...rest }) {
  const { user } = useContext(ProfileContext);
  return user ? <Route {...rest}>{children}</Route> : <Redirect to="/signin" />;
}

export default PrivateRoute;
