import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DasboardLayout = () => {
  return (
    <div className="flex gap-2 flex-col md:flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default DasboardLayout;
