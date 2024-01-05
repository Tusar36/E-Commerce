import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Card = (props) => {
  return (
    <>
      <div className="product-card flex flex-col   ">
        <div className="product-card-image">
          <img src={props.image} alt="image" className="w-full h-full" />
        </div>
        <div className="product-card-name">{props.name}</div>
        <div className="flex gap-2">
          <p className="product-card-original-price"> &#x20B9;{props.price}</p>
          <p className="product-card-discount">-{props.discount}%</p>
          <p className="product-card-price">
            {" "}
            &#x20B9;{props.price - (props.discount / 100) * props.price}
          </p>
        </div>
        <div className="product-card-rating flex gap-2 w-full justify-center">
          <StarIcon />
          {props.rating}
        </div>
        <button className="w-[90%] py-3 text-white bg-indigo-600 m-auto flex gap-2 justify-center hover:bg-indigo-700">
          <AddShoppingCartIcon />
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default Card;
