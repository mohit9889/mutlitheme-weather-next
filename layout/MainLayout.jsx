import React from "react";
import SideNav from "./SideNav";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen bg-primary text-typography">
      <SideNav />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
