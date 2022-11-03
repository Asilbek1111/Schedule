import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ProviderContext } from "./Context/Courses";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ProviderContext>
        <App />
      </ProviderContext>
    </Router>
  </React.StrictMode>
);
