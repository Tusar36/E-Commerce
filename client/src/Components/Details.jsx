import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Loader from "./Loader";
import Productcarousel from "./Productcarousel";
const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [descriptionLength, setDescriptionLength] = useState(100);
  const [description, setDescription] = useState("");

  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API}/product/get/${id}`
    );
    setData(result.data.findProduct);
    setImages(result.data.findProduct.images.reverse());
    setDescription(result.data.findProduct.description);
  };

  useEffect(() => {
    setLoader(true);
    fetchData();
    setLoader(false);
  }, [id]);

  return loader ? (
    <Loader />
  ) : (
    <>
      <div className=" w-[70rem] mx-auto my-10 h-[35rem] flex">
        <Productcarousel images={images} />
        <div className=" w-[40rem] h-full flex flex-col items-center gap-5">
          <div className="w-full font-semibold text-4xl text-indigo-600 flex justify-center items-center py-5">
            {data.name}
          </div>
          <hr className="w-[90%] bg-gray-400 h-[2px]" />
          <div className="w-[90%] ">
            <p>
              {description.substring(0, descriptionLength)}
              <span
                className="text-gray-600 hover:cursor-pointer "
                onClick={() => {
                  if (descriptionLength < description.length) {
                    setDescriptionLength(description.length);
                  } else {
                    setDescriptionLength(100);
                  }
                }}
              >
                {description.length > descriptionLength &&
                descriptionLength < description.length
                  ? "...Read More"
                  : "...Read Less"}
              </span>
            </p>
          </div>
          <div className="flex">
            <span className="line-through text-2xl text-gray-400">
              &#x20B9;{data.price}
            </span>
            <span className="text-red-600 text-2xl">-{data.discount}%</span>
            <span className="text-3xl mx-4">
              &#x20B9;{data.price - (data.discount / 100) * data.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
