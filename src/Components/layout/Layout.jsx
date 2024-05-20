import React from "react";
import Navber from "../Header/navbar";
import Footer from "../Footer/footer";

function Layout({ children }) {
  return (
    <div>
      <Navber />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
