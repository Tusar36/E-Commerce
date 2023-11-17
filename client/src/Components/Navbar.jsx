import React, { useState } from "react";
import LoginModal from "./LoginModal";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className="navBar">
        <div className="text-2xl">Logo</div>
        <div className="gap-7 hidden md:flex">
          <NavLink to='/' className="nav-items"><HomeIcon/>Home</NavLink>
          <NavLink to='/products' className="nav-items"><ListIcon/>Products</NavLink>
          <NavLink to='/about' className="nav-items"><InfoIcon/>About</NavLink>
        </div>

        <div className="flex gap-4">
        <div
          className="nav-Button flex items-center"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Login <LoginIcon/>
        </div>
        <div
          className=" cursor-pointer nav-items border rounded-md border-black text-black block md:hidden"
          onClick={() => {
            if (!showDropdown) {
              setShowDropdown(true);
            } else {
              setShowDropdown(false);
            }
          }}
        >
          <MenuIcon/>
        </div>
        </div>
        
      </nav>

      {showDropdown && (
        <div className="sticky top-[4.7rem] border border-black block md:hidden bg-indigo-600 opacity-70 text-white">
          <div className="w-[100%] flex flex-col gap-3">
          <NavLink to='/' className="nav-items"><HomeIcon/>Home</NavLink>
          <NavLink to='/products' className="nav-items"><ListIcon/>Products</NavLink>
          <NavLink to='/about' className="nav-items"><InfoIcon/>About</NavLink>
          </div>
        </div>
      )}
      {showModal && (
        <LoginModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Navbar;
