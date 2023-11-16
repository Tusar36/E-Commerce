import React, { useState } from "react";

const Login = ({ setLoginForm }) => {


  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });


  return (
    <>
      <div className="text-center text-4xl w-100">Login</div>

      
      <div className="flex flex-col items-center gap-7 mt-16">


        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-[80%] text-xl border border-black outline-none p-3"
          value={userInfo.email}
          onChange={(e) => {
            setUserInfo({
              email: e.target.value,
              password: userInfo.password,
            });
          }}
        />


        <input
          type="password"
          placeholder="Enter Your Password"
          className="w-[80%] text-xl border border-black outline-none p-3"
          value={userInfo.password}
          onChange={(e) => {
            setUserInfo({
              email: userInfo.email,
              password: e.target.value,
            });
          }}
        />


        <button className="bg-indigo-600 w-[80%] py-4 text-xl text-white">
          Login
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
