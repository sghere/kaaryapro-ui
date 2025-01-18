import React from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
const AppLayout = ({ children }) => {
  return (
    <div className="size-full AppLayout">
      <AppHeader/>
      {children}
      <AppFooter />
    </div>
  );
};

export default AppLayout;
