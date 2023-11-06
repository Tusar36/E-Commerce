import React, { useState } from "react";

const LoginModal = ({ showModal, setShowModal }) => {
  const [LoginForm, setLoginForm] = useState(true);
  return (
    <>
      <div className="fixed top-0 w-screen h-screen   transition opacity-80 bg-black "></div>
      {/* Login Form  and Register Form*/}
      {LoginForm ? (
        <div className="fixed top-0 w-screen h-screen  flex justify-center items-center">
          <div className="w-[500px] h-[600px] bg-white">
            <div className="flex justify-end">
              {/* Close button */}
              <button
                className="px-5 py-2 font-bold text-xl"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                &#10005;
              </button>
            </div>
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
          </div>
        </div>
      ) : (
        <div className="fixed top-0 w-screen h-screen  flex justify-center items-center">
          <div className="w-[500px] h-[600px] bg-white">
            <div className="flex justify-end">
              {/* Close button */}
              <button
                className="px-5 py-2 font-bold text-xl"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                &#10005;
              </button>
            </div>
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
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
