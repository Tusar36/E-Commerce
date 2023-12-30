import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Home = () => {
  const [result, setResult] = useState("");
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/product/get`
      );
      console.log(response.data);
      setResult(response);
    } catch (error) {}
  };
  useEffect(() => {
    fetchProducts();
    console.log(result);
  }, []);
  return (
    <>
      <div className="home-product-container ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
