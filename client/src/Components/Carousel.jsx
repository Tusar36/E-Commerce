import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const id = setInterval(() => {
      setOpacity(0.1);
      setTimeout(() => {
        setImageIndex(imageIndex != images.length - 1 ? imageIndex + 1 : 0);
        setOpacity(1);
      }, 500);
    }, 5000);
    return () => clearInterval(id);
  }, [imageIndex]);
  const images = [
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661384073736-0036e2aa65d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div className="relative z-0"></div>
      <div
        className={`w-screen h-screen transition-all ease-in-out bg-cover bg-center `}
        style={{
          backgroundImage: `url(${images[imageIndex].url})`,
          opacity: opacity,
        }}
      ></div>
    </>
  );
};

export default Carousel;
