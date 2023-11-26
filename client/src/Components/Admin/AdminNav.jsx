import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import ViewListIcon from "@mui/icons-material/ViewList";
const AdminNav = () => {
  return (
    <>
      <nav className=" bg-indigo-700  w-full flex gap-4 justify-center">
        <NavLink
          className="p-4 flex justify-center items-center text-white gap-3"
          to="dashboard"
        >
          <DashboardIcon />
          DashBoard
        </NavLink>
        <NavLink
          className="p-4 flex justify-center items-center text-white gap-3"
          to="product"
        >
          <EditIcon />
          Products
        </NavLink>
        <NavLink
          className="p-4 flex justify-center items-center text-white gap-3"
          to="orders"
        >
          <ViewListIcon />
          Orders
        </NavLink>
        <NavLink
          className="p-4 flex justify-center items-center text-white gap-3"
          to="settings"
        >
          <SettingsIcon />
          Settings
        </NavLink>
      </nav>
    </>
  );
};

export default AdminNav;
