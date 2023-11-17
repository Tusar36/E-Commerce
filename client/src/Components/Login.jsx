import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
const Login = ({ setLoginForm }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState("password");
  return (
    <>
      <div className="text-center text-4xl w-100">Login</div>

      <div className="flex flex-col items-center gap-7 mt-16">
        <div className="input-container">
          <div className="input-icon">
            <EmailIcon />
          </div>
          <input
            type="email"
            placeholder="Enter Your Email "
            className="input-field"
            value={userInfo.email}
            onChange={(e) => {
              setUserInfo({
                email: e.target.value,
                password: userInfo.password,
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
            className="input-field "
            value={userInfo.password}
            onChange={(e) => {
              setUserInfo({
                email: userInfo.email,
                password: e.target.value,
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

        <button className="bg-indigo-600 w-[80%] py-4 text-xl text-white gap-3">
          Login <LoginIcon />
        </button>

        <div>
          <span className="text-gray-500">Don't have an account?</span>
          {"   "}
          <span
            className="underline text-blue-500 cursor-pointer"
            onClick={() => {
              setLoginForm(false);
            }}
          >
            Sign Up
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
