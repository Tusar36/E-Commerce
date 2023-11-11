import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const LoginModal = ({ showModal, setShowModal }) => {
  const [LoginForm, setLoginForm] = useState(true);
  return (
    <>
      <div className="fixed top-0 w-screen h-screen   transition opacity-80 bg-black "></div>
      {/* Login Form  and Register Form*/}

      <div className="fixed top-0 w-screen h-screen  flex justify-center items-center">
        <div className="w-[500px] h-[600px] bg-white overflow-auto pb-10">
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
          {LoginForm ? (
            <Login setLoginForm={setLoginForm} />
          ) : (
            <SignUp setLoginForm={setLoginForm} />
          )}
        </div>
      </div>
    </>
  );
};

export default LoginModal;
