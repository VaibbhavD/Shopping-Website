import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./redux/Store.jsx";
import ContextProider from "./context/data/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <ContextProider>
  <Provider store={Store}>
    <App />
  </Provider>
  // {/* </ContextProider> */}
);
