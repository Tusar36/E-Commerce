import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import UploadFileIcon from "@mui/icons-material/UploadFile";
const AddProducts = () => {
  const [dropDown, setDropDown] = useState(false);
  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Phone");
  const [images, setImages] = useState([]);
  const categoryList = [
    "Phone",
    "Laptops",
    "Accessories",
    "Cameras",
    "Computers",
  ];
  return (
    <>
      <div
        className="w-full flex justify-center hover:cursor-pointer bg-indigo-200 border-0"
        onClick={() => {
          setDropDown(!dropDown);
        }}
      >
        <div className="w-[100%] border  p-4 text-xl flex justify-between items-center">
          <p>Add Products</p>
          <p
            className="hover:cursor-pointer"
            onClick={() => {
              setDropDown(!dropDown);
            }}
          >
            {!dropDown ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </p>
        </div>
      </div>
      {dropDown && (
        <div className="w-full flex justify-center   mb-10">
          <div className="w-[100%] flex flex-col justify-center gap-4 p-4 border border-gray-500">
            <input
              type="text"
              name=""
              id=""
              placeholder="Product Name"
              className="w-[100%] m-auto border border-gray-500 outline-none p-4 text-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Product Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-[100%] m-auto border border-gray-500 outline-none p-4 text-xl"
            />
            <div className="flex w-[100%] m-auto justify-between flex-wrap md:flex-nowrap gap-4">
              <input
                type="number"
                name=""
                id=""
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="outline-none border border-gray-500 text-xl p-3 w-[100%]"
              />
              <input
                type="number"
                name=""
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id=""
                className="outline-none border border-gray-500 text-xl p-3 w-[100%]"
              />
              <input
                type="number"
                name=""
                id=""
                placeholder="Discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="outline-none border border-gray-500 text-xl p-3 w-[100%]"
              />
            </div>
            <div className="w-[100%] m-auto flex justify-center flex-wrap md:flex-nowrap gap-4">
              <select
                name="Category"
                id=""
                onChange={(e) => setCategory(e.target.value)}
                className="p-4 text-xl text-center bg-white border border-gray-500 hover:cursor-pointer"
              >
                {categoryList.map((e) => {
                  return <option value={e}>{e}</option>;
                })}
              </select>
              <div className="m-auto outline-none text-xl w-[100%]  flex h-[60px]">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="hidden"
                  onChange={(e) => {
                    setImages([...images, e.target.files]);
                    console.log(images);
                  }}
                />
                <div className="w-full  border border-gray-500 flex gap-2">
                  {images.map((e) => {
                    return <img src={URL.createObjectURL(e[0])} alt="" />;
                  })}
                </div>
                <label
                  htmlFor="file"
                  className="ml-auto flex jsutify-center items-center bg-indigo-400 text-white p-4 hover:cursor-pointer"
                >
                  <p className="flex jsutify-center items-center gap-2 text-lg px-3 w-[150px]">
                    Choose file <UploadFileIcon />{" "}
                  </p>
                </label>
              </div>
            </div>
            <div className="w-[100%] flex justify-center gap-7 text-white text-xl">
              <button className="p-3 w-[150px] bg-indigo-600">
                Add Product
              </button>
              <button
                className="p-3 w-[150px] bg-black"
                onClick={() => {
                  setDescription("");
                  setName("");
                  setPrice("");
                  setStock("");
                  setDiscount("");
                  setImages([]);
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProducts;
