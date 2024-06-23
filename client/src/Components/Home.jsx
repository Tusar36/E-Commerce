import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Carousel from "./Carousel";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
const Home = () => {
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/product/get`
      );

      setResult(response.data.products);
      console.log(response.data.products);
    } catch (error) {}
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {/* Carousel */}
      <Carousel />
      <div className="absolute top-[5rem] z-[1] bg-black opacity-90 w-screen h-screen"></div>
      <div className="absolute top-[5rem] z-[1]  w-screen h-screen flex flex-col gap-5 justify-center items-center">
        <p className="text-6xl text-indigo-600 font-bold">Digital Nest</p>
        <p className="text-lg text-gray-400 font-bold w-[70%] text-center">
          Welcome to Digital Nest Elevate your digital lifestyle with our
          products. Shop now
        </p>
        <button className="bg-indigo-600 border border-indigo-600 text-white text-xl py-5 px-11 hover:text-indigo-600 hover:border hover:border-indigo-600 hover:bg-transparent">
          Shop Now <ShoppingBagIcon />
        </button>
      </div>
      {/* Search */}
      <Search />
      {/* Prouct */}
      <div className="home-product-container bg-gray-200 ">
        {result.map((e) => {
          return (
            <Card
              image={e.images[e.images.length - 1].url}
              price={e.price}
              rating={e.rating}
              name={e.name}
              discount={e.discount}
              _id={e._id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
