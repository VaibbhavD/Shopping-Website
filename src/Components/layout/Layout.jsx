import React from "react";
import Navber from "../Header/navbar";
import Footer from "../Footer/footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function Layout({ children }) {
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
