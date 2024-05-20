import React, { useContext } from "react";
import Context from "../../context/data/Context";

function Home() {
  const context = useContext(Context);
  console.log(context);
  return <div>Home Page</div>;
}

export default Home;
