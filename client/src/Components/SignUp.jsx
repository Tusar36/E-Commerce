import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FlagIcon from "@mui/icons-material/Flag";
import FiberPinIcon from "@mui/icons-material/FiberPin";
import HomeIcon from "@mui/icons-material/Home";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import axios from "axios";

const SignUp = ({ setLoginForm, setShowLoader }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    email: "",
    address: "",
    pin: "",
    country: "",
  });
  const [showPassword, setShowPassword] = useState("password");
  const [showPicOption, setshowPicOption] = useState(false);

  const [image, setImage] = useState();

  const upload = async () => {
    try {
      setShowLoader(true);
      const formData = new FormData();
      formData.append("name", userInfo.name);
      formData.append("email", userInfo.email);
      formData.append("password", userInfo.password);
      formData.append(
        "address",
        `${userInfo.address}-${userInfo.pin}-${userInfo.country}`
      );
      formData.append("image", image);
      const result = await axios.post(
        "http://localhost:3000/auth/register",
        formData
      );
      setShowLoader(false);
    } catch (error) {
      console.log("Error:", error);
      setShowLoader(false);
    }
  };

  return (
    <>
      <div>
        <div className="text-center text-4xl w-100 ">Sign Up</div>

        <div className="flex flex-col items-center gap-7 mt-16">
          <input
            type="file"
            name=""
            id="file"
            className="hidden"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />

          <label htmlFor="file">
            <div
              className="w-[150px] h-[150px]  hover:cursor-pointer flex rounded-full overflow-auto items-center justify-center"
              onMouseEnter={() => {
                setshowPicOption(true);
              }}
              onMouseLeave={() => {
                setshowPicOption(false);
              }}
            >
              <img
                src={image ? URL.createObjectURL(image) : ""}
                alt="Choose an Image"
                className="h-[100%]"
              />
            </div>
          </label>

          <div className="input-container">
            <div className="input-icon">
              <PersonIcon />
            </div>

            <input
              type="text"
              placeholder="Enter Your Name"
              className="input-field"
              value={userInfo.name}
              onChange={(e) => {
                setUserInfo({
                  email: userInfo.email,
                  password: userInfo.password,
                  address: userInfo.address,
                  name: e.target.value,
                });
              }}
            />
            <div className="input-icon"></div>
          </div>

          <div className="input-container">
            <div className="input-icon">
              <EmailIcon />
            </div>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input-field"
              value={userInfo.email}
              onChange={(e) => {
                setUserInfo({
                  email: e.target.value,
                  password: userInfo.password,
                  address: userInfo.address,
                  name: userInfo.name,
                });
              }}
            />
            <div className="input-icon"></div>
          </div>

          <div className="input-container">
            <div className="input-icon">
              <LockIcon />
            </div>
            <input
              type={showPassword}
              placeholder="Enter Your Password"
              className="input-field"
              value={userInfo.password}
              onChange={(e) => {
                setUserInfo({
                  email: userInfo.email,
                  password: e.target.value,
                  address: userInfo.address,
                  name: userInfo.name,
                });
              }}
            />
            <button
              className="input-icon"
              onClick={() => {
                if (showPassword == "password") {
                  setShowPassword("text");
                } else {
                  setShowPassword("password");
                }
              }}
            >
              {showPassword == "password" ? (
                <VisibilityIcon />
              ) : (
                <VisibilityOffIcon />
              )}
            </button>
          </div>

          <div className="input-container">
            <div className="input-icon">
              <FlagIcon />
            </div>
            <input
              type="text"
              placeholder="Enter Your Country Name"
              className="input-field"
              value={userInfo.country}
              onChange={(e) => {
                setUserInfo({
                  email: userInfo.email,
                  password: userInfo.password,
                  address: userInfo.address,
                  name: userInfo.name,
                  pin: userInfo.pin,
                  country: e.target.value,
                });
              }}
            />
            <div className="input-icon"></div>
          </div>

          <div className="input-container">
            <div className="input-icon">
              <FiberPinIcon />
            </div>
            <input
              type="text"
              placeholder="Enter Your Pin Code"
              className="input-field"
              value={userInfo.pin}
              onChange={(e) => {
                setUserInfo({
                  email: userInfo.email,
                  password: userInfo.password,
                  address: userInfo.address,
                  name: userInfo.name,
                  pin: e.target.value,
                  country: userInfo.country,
                });
              }}
            />
            <div className="input-icon"></div>
          </div>

          <div className="input-container">
            <div className="input-icon">
              <HomeIcon />
            </div>
            <input
              type="text"
              placeholder="Enter Your Address"
              className="input-field"
              value={userInfo.address}
              onChange={(e) => {
                setUserInfo({
                  email: userInfo.email,
                  password: userInfo.password,
                  address: e.target.value,
                  name: userInfo.name,
                  pin: userInfo.pin,
                  country: userInfo.country,
                });
              }}
            />
            <div className="input-icon"></div>
          </div>

          <button
            className="bg-indigo-600 w-[80%] py-4 text-xl text-white"
            onClick={upload}
          >
            Sign up <AppRegistrationIcon />
          </button>

          <div className="mb-100px">
            <span
              className="underline text-blue-500 cursor-pointer"
              onClick={() => {
                setLoginForm(true);
              }}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
