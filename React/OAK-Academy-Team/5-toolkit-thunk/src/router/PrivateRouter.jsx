import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { user } = useSelector((state) => state.authReducer);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
