import { React, useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Productcarousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    let inId = setInterval(() => {
      setImageIndex(imageIndex !== images.length - 1 ? imageIndex + 1 : 0);
    }, 6000);
    return () => clearInterval(inId);
  }, [imageIndex]);

  useEffect(() => {
    setImageIndex(0);
  }, []);
  return (
    <div className=" w-[30rem] h-full flex justify-center items-center ">
      <div className="w-full flex  overflow-hidden relative">
        <button
          className="h-[100%] py-3 px-4 absolute  left-0 justify-self-start bg-transparent opacity-40 hover:opacity-70  z-[1]"
          onClick={() => {
            setImageIndex(imageIndex != 0 ? imageIndex - 1 : images.length - 1);
          }}
        >
          <ArrowBackIosIcon />
        </button>
        <button
          className="h-[100%] py-3 px-4 absolute right-0  bg-transparent  opacity-40 hover:opacity-70  z-[1]"
          onClick={() => {
            setImageIndex(imageIndex != images.length - 1 ? imageIndex + 1 : 0);
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
  );
};

export default Productcarousel;
