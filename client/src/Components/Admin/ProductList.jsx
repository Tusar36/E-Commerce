import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Loader from "../Loader";
import SearchIcon from "@mui/icons-material/Search";
import millify from "millify";
import ProductEditModal from "./ProductEditModal";
const ProductList = ({ change }) => {
  const [data, setData] = useState([]);
  const [productList, setProductList] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState({});
  const fetchProducts = async () => {
    try {
      setShowLoader(true);
      const result = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/product/get`
      );
      setData(result.data.products);
      setProductList(result.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setShowLoader(false);
    }
  };

  const searchHandler = (e) => {
    const filter = data.filter((r) =>
      r.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductList(filter);
  };

  const Delete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_API}/product/delete/${id.trim(" ")}`
      );
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [change]);
  return (
    <>
      {/* <ProductEditModal /> */}
      <div>
        {showModal && (
          <ProductEditModal data={edit} setShowModal={setShowModal} />
        )}
        {!showLoader ? (
          <div>
            <div className="w-[70%] h-[50px] px-4 flex border border-black m-auto mb-4 items-center gap-3 ">
              <SearchIcon />
              <input
                type="text"
                name=""
                id=""
                className="outline-none w-[100%]  text-xl "
                placeholder="Search Products"
                onChange={searchHandler}
              />
            </div>
            <table className="w-full ">
              <thead>
                <tr>
                  <th className="bg-red-500 text-white p-4">Product</th>
                  <th className="bg-red-500 text-white p-4">Amount</th>
                  <th className="bg-red-500 text-white p-4">Stock</th>
                  <th className="bg-red-500 text-white p-4">Rating</th>
                  <th className="bg-red-500 text-white p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((e) => {
                  return (
                    <tr key={e._id} className="">
                      <td className="p-3 text-center border border-gray-300 max-w-[50%]">
                        {e.name}
                      </td>
                      <td className="p-3 text-center border border-gray-300 ">
                        {millify(e.price - e.price * (e.discount / 100))} INR
                      </td>
                      <td className="p-3 text-center border border-gray-300 ">
                        {e.stock}
                      </td>
                      <td className="p-3 text-center border-y  border-gray-300 ">
                        {e.rating.toFixed(2)}
                      </td>
                      <td className="p-3 text-center flex gap-2 justify-center">
                        <button
                          className=" p-2 bg-red-600 rounded-lg text-white"
                          value={e._id}
                          onClick={() => {
                            Delete(e._id);
                          }}
                        >
                          <DeleteIcon />
                        </button>
                        <button
                          className=" p-2 bg-green-600 rounded-lg text-white"
                          value={e._id}
                          onClick={() => {
                            setEdit(e);
                            setShowModal(!showModal);
                          }}
                        >
                          <EditIcon />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default ProductList;
