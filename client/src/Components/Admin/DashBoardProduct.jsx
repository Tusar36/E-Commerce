import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import AddProducts from "./AddProducts";
const DashBoardProduct = () => {
  const [change, setChange] = useState(0);
  return (
    <>
      <div className="p-5">
        <div className="mb-10">
          <AddProducts setChange={setChange} />
        </div>
        <ProductList change={change} />
      </div>
    </>
  );
};

export default DashBoardProduct;
