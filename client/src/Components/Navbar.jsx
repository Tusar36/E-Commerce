import React, { useState, useContext } from "react";
import LoginModal from "./LoginModal";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../Context/UserContext";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { toast } from "react-toastify";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileDropdown, setshowProfileDropdown] = useState(false);
  const { UserInfo, setUserInfo } = useContext(userContext);
  return (
    <>
      <div className="navBar ">
        <div className="w-full h-full bg-white flex py-3 justify-center">
          <div className="text-center flex items-center w-48">
            <NavLink to="/" className="text-3xl w-full  text-indigo-600">
              <p className="text-3xl  text-indigo-600 w-full ">Digital Nest</p>
            </NavLink>
          </div>

          <div className="flex bg-gray-200 px-3 py-3 w-[60%]">
            <div className="flex justify-center items-center px-2 text-gray-500">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search For Products, Brands And More "
              className="w-[100%] text-black bg-transparent outline-none"
            />
          </div>

          <div className="flex gap-4  h-full mx-4 bg-white">
            {!UserInfo.isLogined ? (
              <div
                className="nav-Button flex items-center gap-3 px-5 hover:text-white hover:bg-indigo-600 text-xl"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <AccountCircleIcon /> Login
              </div>
            ) : (
              <div className=" flex flex-col items-center justify-center">
                <Profile
                  setShowProfileDropdown={setshowProfileDropdown}
                  showProfileDropdown={showProfileDropdown}
                />
                <div
                  className={`absolute transition-all duration-200 -z-[100] ${
                    showProfileDropdown ? "top-[5rem]" : "top-[-100%]"
                  }`}
                >
                  <div className="w-[200px] justify-center items-center flex flex-col   ">
                    {UserInfo.isAdmin && (
                      <Link
                        to="/admin/dashboard"
                        className=" flex justify-center items-center  gap-4 w-[100%] hover:cursor-pointer text-white bg-indigo-600 py-4 hover:bg-indigo-700"
                      >
                        DashBoard
                      </Link>
                    )}

                    <div
                      className=" flex justify-center items-center  gap-4 w-[100%] hover:cursor-pointer text-white bg-indigo-600 py-4 hover:bg-indigo-700"
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
                        setshowProfileDropdown(false);
                      }}
                    >
                      <p className="mr-3">Log Out</p>
                      <LogoutIcon />
                    </div>
                  </div>
                </div>
              </div>
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

          <div className="gap-7 hidden md:flex">
            <NavLink to="/about" className="nav-items">
              <InfoIcon />
              About
            </NavLink>
          </div>
        </div>
      </div>

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
        className=" w-[45px] h-[45px] p-0 border-2 bg-white border-white rounded-full hover:cursor-pointer"
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
