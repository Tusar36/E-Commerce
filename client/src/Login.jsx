import React from "react";

const Login = ({ setLoginForm }) => {
  return (
    <>
      <div className="text-center text-4xl w-100">Login</div>
      <div className="flex flex-col items-center gap-7 mt-16">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="w-[80%] text-xl border border-black outline-none p-3"
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="w-[80%] text-xl border border-black outline-none p-3"
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
