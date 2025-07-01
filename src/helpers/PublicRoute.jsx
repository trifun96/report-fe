import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  if (user) {
    return <Navigate to="/user/report" replace />;
  }

  return children;
};

export default PublicRoute;