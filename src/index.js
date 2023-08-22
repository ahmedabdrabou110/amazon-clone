import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalProvider from "./context/GlobalProvider";
const root = createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <Router>
      <App />
    </Router>
  </GlobalProvider>
);
