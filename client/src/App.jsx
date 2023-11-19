import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { userContext } from "./Context/UserContext";
import axios from "axios";
const App = () => {
  const { UserInfo, setUserInfo } = useContext(userContext);

  const checkLogin = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/auth/checkLogin`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      );
      setUserInfo({
        name: result.data.name,
        email: result.data.email,
        image: result.data.image.url,
        _id: result.data._id,
        isLogined: result.data.isLogined,
        isAdmin: result.data.isAdmin,
      });
    } catch (error) {}
  };

  useEffect(() => {
    checkLogin();
  },[]);

  return (
    <>
      <Router>
        <Navbar />
        {/* <LoaderModal/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
