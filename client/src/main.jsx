import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./Context/UserContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      rtl={false}
      theme="dark"
      className={'z-[9999999999999999999999999999999]'}
    />
    <App />
    <ToastContainer />
  </UserContextProvider>
);
