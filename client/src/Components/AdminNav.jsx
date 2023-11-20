import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import ViewListIcon from "@mui/icons-material/ViewList";
const AdminNav = () => {
  return (
    <>
      <nav className=" bg-indigo-500 w-72 h-screen flex flex-col gap-4">
        <Link
          className="p-4 flex justify-center items-center text-white gap-3"
          to="dashboard"
        >
          <DashboardIcon />
          DashBoard
        </Link>
        <Link
          className="p-4 flex justify-center items-center text-white gap-3"
          to="product"
        >
          <EditIcon />
          Products
        </Link>
        <Link
          className="p-4 flex justify-center items-center text-white gap-3"
          to="orders"
        >
          <ViewListIcon />
          Orders
        </Link>
        <Link
          className="p-4 flex justify-center items-center text-white gap-3"
          to="settings"
        >
          <SettingsIcon />
          Settings
        </Link>
      </nav>
    </>
  );
};

export default AdminNav;
