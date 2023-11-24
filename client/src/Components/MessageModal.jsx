import React from "react";

const MessageModal = ({ message, showModal ,id}) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-[100%] h-[100%]  transition opacity-50 bg-black z-[9999999999]"></div>
      <div className="fixed top-0 w-[100%] left-0 h-[100%] z-[99999999999] flex items-center justify-center">
        <div className="w-[400px] h-[200px] bg-white">{id}</div>
      </div>
    </>
  );
};

export default MessageModal;
