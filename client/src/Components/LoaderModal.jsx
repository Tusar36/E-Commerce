import React from "react";
import Loader from "./Images/Loader.gif";
const LoaderModal = () => {
  return (
    <>
      <div className="z-[100000] fixed top-0 w-screen h-screen opacity-20 bg-black left-0"></div>
      <div className="z-[20000000000000000000000] fixed top-0 w-screen h-screen  flex justify-center items-center left-0">
        <div className="w-[200px] h-[150px] flex justify-center items-center">
          <img src={Loader} alt="" />
        </div>
      </div>
    </>
  );
};

export default LoaderModal;
