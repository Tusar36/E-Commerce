import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import AddProducts from "./AddProducts";
const DashBoardProduct = () => {
  const [change, setChange] = useState(0);
  return (
    <>
      <div className="p-5">
        <ProductList change={change} />
      </div>
    </>
  );
};

export default DashBoardProduct;
