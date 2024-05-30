import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  UNSAFE_useScrollRestoration,
} from "react-router-dom";
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
import AboutUs from "./pages/AboutUs/AboutUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import MainProductPage from "./pages/MainProductPage.jsx/MainProductPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { ScrollRestoration } from "react-router-dom";
import { useEffect } from "react";
import ProfilePage from "./pages/Profile/Profile";

function App() {
  const isLoggedIn = useSelector((state) => state.authUser.isLoggedin);
  const isAdmin = useSelector((state) => state.authUser.isAdmin);

  return (
    <ContextProider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          {isLoggedIn && <Route path="/order" element={<Order />} />}
          {isLoggedIn && <Route path="/cart" element={<Cart />} />}
          {isLoggedIn && <Route path="/profile" element={<ProfilePage />} />}
          {isAdmin && <Route path="/dashboard" element={<Dashboard />} />}
          <Route path="/nopage" element={<NoPage />} />
          {!isLoggedIn && <Route path="/signup" element={<SignUp />} />}
          {!isLoggedIn && <Route path="/login" element={<Login />} />}
          {isLoggedIn && <Route path="/*" element={<Home />} />}
          <Route path="/*" element={<Login />} />
          <Route path="/category/:category" element={<MainProductPage />} />
          {isAdmin && <Route path="/addproduct" element={<AddProduct />} />}
        </Routes>

        <ToastContainer />
      </Router>
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
