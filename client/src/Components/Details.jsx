import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    let inId = setInterval(() => {
      setImageIndex(imageIndex !== images.length - 1 ? imageIndex + 1 : 0);
    }, 6000);
    return () => clearInterval(inId);
  }, [imageIndex]);

  const fetchData = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API}/product/get/${id}`
    );
    setData(result.data.findProduct);
    setImages(result.data.findProduct.images.reverse());
  };

  useEffect(() => {
    fetchData();
    setImageIndex(0);
  }, []);

  return (
    <>
      <div className=" w-[70rem] mx-auto my-10 h-[35rem] flex">
        <div className=" w-[30rem] h-full flex justify-center items-center ">
          <div className="w-full flex  overflow-hidden relative">
            <button
              className="h-[100%] py-3 px-4 absolute  left-0 justify-self-start bg-gray-300 opacity-40 hover:opacity-70  z-[1]"
              onClick={() => {
                setImageIndex(
                  imageIndex != 0 ? imageIndex - 1 : images.length - 1
                );
              }}
            >
              <ArrowBackIosIcon />
            </button>
            <button
              className="h-[100%] py-3 px-4 absolute right-0  bg-gray-300  opacity-40 hover:opacity-70  z-[1]"
              onClick={() => {
                setImageIndex(
                  imageIndex != images.length - 1 ? imageIndex + 1 : 0
                );
              }}
            >
              <ArrowForwardIosIcon />
            </button>
            {images.map((x) => {
              return (
                <img
                  src={x.url}
                  style={{ transform: `translateX(${-imageIndex * 100}%)` }}
                  alt=""
                  className=" object-cover transition-all duration-200 z-0"
                />
              );
            })}
          </div>
        </div>
        <div className=" w-[40rem] h-full"></div>
      </div>
    </>
  );
};

export default Details;
