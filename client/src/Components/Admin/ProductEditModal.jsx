import React, { useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "axios";
import Loader from "../LoaderModal";
const ProductEditModal = ({ data, setShowModal }) => {
  const [name, setName] = useState(data.name);
  const [Description, setDescription] = useState(data.description);
  const [stock, setStock] = useState(data.stock);
  const [discount, setDiscount] = useState(data.discount);
  const [price, setPrice] = useState(data.price);
  const [category, setCategory] = useState(data.category);
  const [images, setImages] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const categoryList = [
    "Phone",
    "Laptops",
    "Accessories",
    "Cameras",
    "Computers",
  ];

  const Uplaod = async () => {
    try {
      setShowLoader(true);
      const result = await axios.put(
        `${import.meta.env.VITE_REACT_APP_API}/product/update/${data._id}`,
        {
          name: name,
          description: Description,
          stock: stock,
          price: price,
          discount: discount,
          category: category,
        }
      );
    } catch (error) {
    } finally {
      setShowLoader(false);
      setShowModal(false);
      window.location.reload();
    }
  };

  return (
    <>
      <div className="z-[100000] fixed top-0 w-screen h-screen opacity-20 bg-black left-0"></div>
      {showLoader && <Loader />}
      <div className="z-[2000000] fixed top-0 w-screen h-screen  flex justify-center items-center left-0">
        <div className="p-5 bg-white w-[800px]">
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
              <textarea
                name=""
                id=""
                placeholder="Product Description"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-[100%] m-auto border border-gray-500 outline-none p-4 text-xl resize-none"
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
                <div className=" border border-gray-500 text-xl w-[100%] flex justify-center items-center gap-1 pl-2">
                  <div className="w-full">Category:</div>
                  <select
                    name="Category"
                    id=""
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-4 text-xl text-center bg-gray-200 border-none hover:cursor-pointer "
                  >
                    {categoryList.map((e) => {
                      return (
                        <option value={e} key={e}>
                          {e}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="w-[100%] m-auto flex justify-center flex-wrap md:flex-nowrap gap-4">
                <div className="m-auto outline-none text-xl w-[100%]  flex h-[60px]">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="hidden"
                    onChange={(e) => {
                      setImages([...images, e.target.files[0]]);
                    }}
                  />
                  <div className="w-full  border border-gray-500 flex gap-2">
                    {images.map((e) => {
                      return <img src={URL.createObjectURL(e)} alt="" />;
                    })}
                  </div>
                  <label
                    htmlFor="file"
                    className="ml-auto flex jsutify-center items-center bg-indigo-600 text-white p-4 hover:cursor-pointer"
                  >
                    <p className="flex jsutify-center items-center gap-2 text-lg px-3 w-[150px]">
                      Choose file <UploadFileIcon />{" "}
                    </p>
                  </label>
                </div>
              </div>
              <div className="w-[100%] flex justify-center gap-7 text-white text-xl">
                <button
                  className="p-3 w-[150px] bg-indigo-600"
                  onClick={Uplaod}
                >
                  Edit Product
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
        </div>
      </div>
    </>
  );
};

export default ProductEditModal;
