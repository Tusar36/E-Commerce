import React, { useState } from "react";
import LoginModal from "./LoginModal";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className="navBar">
        <div className="text-2xl">Logo</div>
        <div className="gap-7 hidden md:flex">
          <div className="nav-items">Home</div>
          <div className="nav-items">Products</div>
          <div className="nav-items"> About</div>
        </div>

        <div className="flex gap-4">
        <div
          className="nav-Button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Login
        </div>
        <div
          className="nav-Button block md:hidden"
          onClick={() => {
            if (!showDropdown) {
              setShowDropdown(true);
            } else {
              setShowDropdown(false);
            }
          }}
        >
          &#9776;
        </div>
        </div>
        
      </nav>

      {showDropdown && (
        <div className="sticky top-[4.7rem] border border-black block md:hidden bg-indigo-600 opacity-70 text-white">
          <div className="w-[100%] flex flex-col gap-3">
            <div className="nav-items">Home</div>
            <div className="nav-items">Products</div>
            <div className="nav-items"> About</div>
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
