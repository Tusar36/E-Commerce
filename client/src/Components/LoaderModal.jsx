import React from "react";
import Loader from "./Images/Loader.gif";
const LoaderModal = () => {
  return (
    <>
      <div className="z-10 fixed top-0 w-screen h-screen opacity-90 bg-black"></div>
      <div className="w-full h-screen flex justify-center items-center opacity-100">
        <div className="w-[200px] h-[150px] flex justify-center items-center">
            <img src={Loader} alt=""/>
        </div>
      </div>
    </>
  );
};

export default LoaderModal;
