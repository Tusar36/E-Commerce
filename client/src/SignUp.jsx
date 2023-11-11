import React, { useState } from "react";

const SignUp = ({ setLoginForm }) => {


  const [userInfo,setUserInfo] = useState({
    name:"",
    password:"",
    email:"",
    address:""
  })



  
  return (
    <>
      <div className="text-center text-4xl w-100 ">Sign Up</div>

      <div className="flex flex-col items-center gap-7 mt-16">

        <input type="image" src="" alt="" />
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-[80%] text-xl border border-black outline-none p-3"
          value={userInfo.name}
          onChange={(e)=>{
            setUserInfo({
              email:userInfo.email,
              password:userInfo.password,
              address:userInfo.address,
              name:e.target.value
            })
          }}
        />


        <input
          type="text"
          placeholder="Enter Your Email"
          className="w-[80%] text-xl border border-black outline-none p-3"
          value={userInfo.email}
          onChange={(e)=>{
            setUserInfo({
              email:e.target.value,
              password:userInfo.password,
              address:userInfo.address,
              name:userInfo.name
            })
          }}
        />


        <input
          type="password"
          placeholder="Enter Your Password"
          className="w-[80%] text-xl border border-black outline-none p-3"
          value={userInfo.password}
          onChange={(e)=>{
            setUserInfo({
              email:userInfo.email,
              password:e.target.value,
              address:userInfo.address,
              name:userInfo.name
            })
          }}
        />

        <input
          type="text"
          placeholder="Enter Your Address"
          className="w-[80%] text-xl border border-black outline-none p-3"
          value={userInfo.address}
          onChange={(e)=>{
            setUserInfo({
              email:userInfo.email,
              password:userInfo.password,
              address:e.target.value,
              name:userInfo.name
            })
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
