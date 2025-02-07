import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SubdomainProvider } from "./context/SubdomainContext"; // Import Context Provider
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SubdomainProvider>
      <App />
    </SubdomainProvider>
  </BrowserRouter>
);
