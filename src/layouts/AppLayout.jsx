import React from "react";
import AppFooter from "./components/AppFooter";
const AppLayout = ({ children }) => {
  return (
    <div>
      {children}
      <AppFooter />
    </div>
  );
};

export default AppLayout;
