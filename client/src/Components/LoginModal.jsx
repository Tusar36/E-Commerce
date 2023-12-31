import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import LoaderModal from "./LoaderModal";
const LoginModal = ({ showModal, setShowModal }) => {
  const [LoginForm, setLoginForm] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  return (
    <>
      {showLoader && (
        <div className="fixed top-0 w-screen h-screen  z-[9999999999999999999999999999999]">
          <LoaderModal />
        </div>
      )}
      <div className="fixed top-0 w-screen h-screen  transition opacity-80 bg-black  z-10"></div>
      {/* Login Form  and Register Form*/}

      <div className="z-10 fixed top-0 w-screen h-screen  flex justify-center items-center">
        <div className="w-[350px] h-[600px] bg-white overflow-auto pb-10 sm:w-[500px]">
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
            <Login
              setLoginForm={setLoginForm}
              setShowLoader={setShowLoader}
              setShowModal={setShowModal}
            />
          ) : (
            <SignUp setLoginForm={setLoginForm} setShowLoader={setShowLoader} />
          )}
        </div>
      </div>
    </>
  );
};

export default LoginModal;
