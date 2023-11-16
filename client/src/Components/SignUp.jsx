import React, { useState } from "react";

const SignUp = ({ setLoginForm }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    email: "",
    address: "",
    pin: "",
    country: "",
  });
  const [showPicOption, setshowPicOption] = useState(false);
  return (
    <>
      <div className="text-center text-4xl w-100 ">Sign Up</div>

      <div className="flex flex-col items-center gap-7 mt-16">
        <input type="file" name="" id="file" className="hidden" />

        <label htmlFor="file">
          <div
            className="w-[150px] h-[150px] border border-black hover:cursor-pointer flex rounded-full overflow-auto"
            onMouseEnter={() => {
              setshowPicOption(true);
            }}
            onMouseLeave={() => {
              setshowPicOption(false);
            }}
          >
            {showPicOption && (
              <div className="self-end text-center bg-black opacity-50 text-white py-4 round">
                Change Profile Image
              </div>
            )}
          </div>
        </label>

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

        <input
          type="password"
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

        <button className="bg-indigo-600 w-[80%] py-4 text-xl text-white">
          Sign Up
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
    </>
  );
};

export default SignUp;
