import { createContext, useContext, useState } from "react";
import React from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [UserInfo, setUserInfo] = useState({
    name: "",
    email: "",
    image: "",
    _id:"",
    isLogined: false,
    isAdmin: false,
  });
  return (
    <userContext.Provider value={{ UserInfo, setUserInfo }}>
      {children}
    </userContext.Provider>
  );
};
