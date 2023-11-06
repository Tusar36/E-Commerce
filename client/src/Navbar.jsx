import React, { useState } from "react";
import LoginModal from "./LoginModal";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <nav className="w-screen flex bg-indigo-600 p-4 justify-between text-white sticky top-0">
        <div className="text-2xl">Logo</div>
        <div className="flex gap-7">
          <div className="nav-items">Home</div>
          <div className="nav-items">Products</div>
          <div className="nav-items"> About</div>
        </div>

        <div
          className=" cursor-pointer nav-items bg-white text-black"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Login
        </div>
      </nav>
      {showModal && (
        <LoginModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Navbar;
