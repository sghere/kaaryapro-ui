import React from "react";
import AppFooter from "./components/AppFooter";
const AppLayout = ({ children }) => {
  return (
    <div className="size-full AppLayout">
      {children}
      <AppFooter />
    </div>
  );
};

export default AppLayout;
