import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { userContext } from "./Context/UserContext";
import axios from "axios";
import Loader from "./Components/Loader";
import DashBoard from "./Components/DashBoard";
import Error from "./Components/Error";
import DashBoardProduct from "./Components/DashBoardProduct";
import Admin from "./Components/Admin";
const App = () => {
  const { UserInfo, setUserInfo } = useContext(userContext);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(false);
  const checkLogin = async () => {
    if(localStorage.getItem("token")){
      try {
        setShowLoader(true);
        const result = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API}/auth/checkLogin`,
          {
            headers: {
              auth: localStorage.getItem("token"),
            },
          }
        );
        setShowLoader(false);
        setUserInfo({
          name: result.data.name,
          email: result.data.email,
          image: result.data.image.url,
          _id: result.data._id,
          isLogined: result.data.isLogined,
          isAdmin: result.data.isAdmin,
        });
      } catch (e) {
        setShowLoader(false);
        setError(true);
        console.log(e)
      } finally {
        setShowLoader(false)
      }
    }
    
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return !showLoader ? (
    <>
      {error ? (
        <Error message={"Network Error"} />
      ) : (
        <Router>
          <Navbar />
          {/* <LoaderModal/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Home />} />
            {UserInfo.isAdmin && (
              <Route path="/admin" element={<Admin />}>
                <Route path="product" element={<DashBoardProduct />} />
                <Route path="dashboard" element={<DashBoard />} />
              </Route>
            )}
            <Route
              path="*"
              element={<Error status={404} message={"Page not found"} />}
            />
          </Routes>
        </Router>
      )}
    </>
  ) : (
    <Loader />
  );
};

export default App;
