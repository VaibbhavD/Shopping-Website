import React, { useContext, useEffect, useState } from "react";
import Navber from "../Header/navbar";
import Footer from "../Footer/footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Context from "../../context/data/Context";
import { useSelector } from "react-redux";
import Modal from "../modal/Modal";
import Login from "../../pages/registration/Login";
import { toast } from "react-toastify";

function Layout({ children }) {
  const [isOpen, SetisOpen] = useState();

  // useEffect(() => {
  //   setTimeout(() => {
  //     toast.info("Login To Unlock More Features");
  //   }, 10000);

  //   return () => {
  //     clearTimeout();
  //   };
  // }, []);

  ScrollToTop();

  return (
    <div>
      <Navber />

      <div className="content">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
