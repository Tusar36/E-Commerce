import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
import MessageModal from './MessageModal'
const Admin = () => {
  return (
    
    <div className="flex ">
      <AdminNav />
      <div className="min-h-screen overflow-auto w-[100%]">
        
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
