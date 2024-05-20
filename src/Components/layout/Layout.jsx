import React from "react";
import Navber from "../nowork'/Navbar/Navbar";

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
