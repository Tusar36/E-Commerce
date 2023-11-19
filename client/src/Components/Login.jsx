import React, { useState, useContext } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import axios from "axios";
import { userContext } from "../Context/UserContext";
import { toast } from "react-toastify";
const Login = ({ setLoginForm, setShowLoader,setShowModal }) => {
  const [Info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState("password");
  const { UserInfo, setUserInfo } = useContext(userContext);

  const login = async () => {
    setShowLoader(true);
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/auth/login`,
        {
          email: Info.email,
          password: Info.password,
        }
      );
      // setTimeout(() => {
      //   location.reload();
      // }, 1000);
      localStorage.setItem("token", result.data.token);
      const resultCheckLogin = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/auth/checkLogin`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      );
      setUserInfo({
        name: resultCheckLogin.data.name,
        email: resultCheckLogin.data.email,
        image: resultCheckLogin.data.image.url,
        _id: resultCheckLogin.data._id,
        isLogined: resultCheckLogin.data.isLogined,
        isAdmin: resultCheckLogin.data.isAdmin,
      });
      toast.success("Logined", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      setShowModal(false)
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setShowLoader(false);
    }
  };

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
            value={Info.email}
            onChange={(e) => {
              setInfo({
                email: e.target.value,
                password: Info.password,
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
            value={Info.password}
            onChange={(e) => {
              setInfo({
                email: Info.email,
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

        <button
          className="bg-indigo-600 w-[80%] py-4 text-xl text-white gap-3"
          onClick={login}
        >
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
