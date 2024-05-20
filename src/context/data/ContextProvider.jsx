import { useState } from "react";
import Context from "./Context";

const ContextProider = (props) => {
  const [mode, Setmode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      Setmode("dark");
      document.body.style.backgroundColor = "rcb (17,24,39)";
    } else {
      Setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <Context.Provider value={{ mode, toggle }}>
      {props.children}
    </Context.Provider>
  );
};
export default ContextProider;
