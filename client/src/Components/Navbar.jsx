import React, { useState, useContext } from "react";
import LoginModal from "./LoginModal";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { userContext } from "../Context/UserContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { toast } from "react-toastify";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileDropdown, setshowProfileDropdown] = useState(false);
  const { UserInfo, setUserInfo } = useContext(userContext);
  return (
    <>
      <nav className="navBar">
        <div className="text-2xl h-full flex items-center"><p>Logo</p></div>
        <div className="gap-7 hidden md:flex">
          <NavLink to="/" className="nav-items">
            <HomeIcon />
            Home
          </NavLink>
          <NavLink to="/products" className="nav-items">
            <ListIcon />
            Products
          </NavLink>
          <NavLink to="/about" className="nav-items">
            <InfoIcon />
            About
          </NavLink>
        </div>

        <div className="flex gap-4">
          {!UserInfo.isLogined ? (
            <div
              className="nav-Button flex items-center"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Login <LoginIcon />
            </div>
          ) : (
            <Profile
              setShowProfileDropdown={setshowProfileDropdown}
              showProfileDropdown={showProfileDropdown}
            />
          )}

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
            <MenuIcon />
          </div>
        </div>
      </nav>

      {showDropdown && (
        <div className="sticky top-[4.7rem] border border-black block md:hidden bg-indigo-600 opacity-70 text-white">
          <div className="w-[100%] flex flex-col gap-3">
            <NavLink to="/" className="nav-items">
              <HomeIcon />
              Home
            </NavLink>
            <NavLink to="/products" className="nav-items">
              <ListIcon />
              Products
            </NavLink>
            <NavLink to="/about" className="nav-items">
              <InfoIcon />
              About
            </NavLink>
          </div>
        </div>
      )}
      {showProfileDropdown && (
        <div className="w-[100vw] sticky top-[4.7rem] text-white flex justify-end">
          <div className="w-[200px] flex flex-col gap-3 justify-self-end bg-indigo-500">
            <div
              className="nav-items flex gap-4 w-[100%] hover:cursor-pointer"
              onClick={() => {
                localStorage.clear();
                setUserInfo({
                  name: "",
                  email: "",
                  image: "",
                  _id: "",
                  isLogined: false,
                  isAdmin: false,
                });
                toast.success("Loged out", {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
                  progress: undefined,
                  theme: "dark",
                });
                setshowProfileDropdown(false)
              }}
            >
              <p className="mr-3">Log Out</p>
              <LogoutIcon />
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <LoginModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

const Profile = ({ showProfileDropdown, setShowProfileDropdown }) => {
  const { UserInfo, setUserInfo } = useContext(userContext);

  const showProfile = () => {
    if (showProfileDropdown) {
      setShowProfileDropdown(false);
    } else {
      setShowProfileDropdown(true);
    }
  };

  return (
    <>
      <div
        className=" w-[50px] h-[50px] p-0 border-2 border-white rounded-full hover:cursor-pointer"
        onClick={showProfile}
      >
        <img
          src={UserInfo.image}
          alt=""
          className="w-[100%] h-[100%] rounded-full"
        />
      </div>
    </>
  );
};

export default Navbar;
