import React from "react";

const ProductEditModal = () => {
  return (
    <>
      <div className="z-[100000] fixed top-0 w-screen h-screen opacity-20 bg-black left-0"></div>
      <div className="z-[200000] fixed top-0 w-screen h-screen  flex justify-center items-center left-0">
        <div className="bg-white w-[500px] h-[600px]">
          <div className="p-4">
            <textarea
              name=""
              id=""
              placeholder="Product Description"
              onChange={(e) => {}}
              className="w-[100%] m-auto border border-gray-500 outline-none p-4 text-xl resize-none"
            />
            <textarea
              name=""
              id=""
              placeholder="Product Description"
              onChange={(e) => {}}
              className="w-[100%] m-auto border border-gray-500 outline-none p-4 text-xl resize-none"
            />
            <textarea
              name=""
              id=""
              placeholder="Product Description"
              onChange={(e) => {}}
              className="w-[100%] m-auto border border-gray-500 outline-none p-4 text-xl resize-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEditModal;
