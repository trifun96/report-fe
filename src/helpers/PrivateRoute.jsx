import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  // Ako nema usera, redirektuj na login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Ako je user, prikazi decu (tj. zaštićenu komponentu)
  return children;
};

export default PrivateRoute;