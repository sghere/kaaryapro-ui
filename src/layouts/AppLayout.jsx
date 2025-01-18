import React from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import { Navigate, Outlet } from "react-router";
import { constants } from "@common/constants";
const AppLayout = ({ children }) => {


  if(!constants.isAuthenticated) return <Navigate to="/login" />

  return (
    <div className="size-full AppLayout">
      <AppHeader/>
      <Outlet/>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
