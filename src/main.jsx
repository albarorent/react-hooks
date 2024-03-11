import React from "react";
import ReactDOM from "react-dom/client";
import HooksApp from "./HooksApp.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HooksApp />
    </BrowserRouter>
  </React.StrictMode>
);
