// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const PrivateRoute = ({ element, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
