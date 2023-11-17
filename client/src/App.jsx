import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from './Components/Products'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
      <Navbar />
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
