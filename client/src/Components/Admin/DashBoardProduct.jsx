import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import AddProducts from "./AddProducts";
const DashBoardProduct = () => {
  return (
    <>
      <div className="p-5">
        <div className="mb-10">
          <AddProducts />
        </div>

        <ProductList />
      </div>
    </>
  );
};

export default DashBoardProduct;
