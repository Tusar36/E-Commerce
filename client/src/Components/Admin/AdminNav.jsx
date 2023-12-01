import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import ViewListIcon from "@mui/icons-material/ViewList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
const AdminNav = () => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <nav className=" text-indigo-600 w-72 flex flex-col  gap-4 justify-center h-full">
        <NavLink
          className="p-4 flex justify-center items-center gap-3"
          to="dashboard"
        >
          <DashboardIcon />
          DashBoard
        </NavLink>

        <div
          className="p-3 flex justify-center items-center  gap-3 hover:cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          <EditIcon /> Products{" "}
          {!expand ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </div>

        {expand && (
          <div className="bg-gray-100">
            <NavLink
              className="p-4 flex justify-center items-center  gap-3"
              to="product/add"
            >
              <AddIcon /> Create Product
            </NavLink>
            <NavLink
              className="p-4 flex justify-center items-center  gap-3"
              to="product/list"
            >
              <ViewListIcon /> Product List
            </NavLink>
          </div>
        )}

        <NavLink
          className="p-4 flex justify-center items-center  gap-3"
          to="orders"
        >
          <ViewListIcon />
          Orders
        </NavLink>
        <NavLink
          className="p-4 flex justify-center items-center  gap-3"
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
