import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
const Admin = () => {
  return (
    <div className=" flex">
      <AdminNav />
      <div className="min-h-screen overflow-auto w-[100%] border border-gray-300">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
