import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/Order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import Layout from "./Components/layout/Layout";
import ContextProider from "./context/data/ContextProvider";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdatProduct";
import AboutUs from "./pages/AboutUs/AboutUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthActions } from "./redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const isLoggedIn = useSelector((state) => state.authUser.isLoggedin);

  return (
    <ContextProider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/product/" element={<ProductInfo />} />
          {isLoggedIn && <Route path="/order" element={<Order />} />}
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nopage" element={<NoPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </ContextProider>
  );
}
// export const UserProtected = ({ children }) => {
//   const user = localStorage.getItem("User");
//   if (user) {
//     return children;
//   } else {
//     <Navigate to="/login" />;
//   }
// };

// export const AdminProtected = ({ children }) => {
//   const user = JSON.parse(localStorage.getItem("User"));
//   if (user.user.email === "adminvaibhav@gmail.com") {
//     return children;
//   } else {
//     <Navigate to={"/login"} />;
//   }
// };

export default App;
