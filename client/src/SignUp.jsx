import React from "react";

const SignUp = ({ setLoginForm }) => {
  return (
    <>
      <div className="text-center text-4xl w-100">Sign Up</div>
      <div className="flex flex-col items-center gap-7 mt-16">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-[80%] text-xl border border-black outline-none p-3"
        />
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
          Sign Up
        </button>
        <div>
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
    </>
  );
};

export default SignUp;
