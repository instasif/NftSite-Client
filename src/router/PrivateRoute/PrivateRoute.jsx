import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const location = useLocation();


  if (isLoading) {
    return <p>Loading......</p>;
  }

  if (user.email) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;

// resct of this work left in login page
