import React from "react";
import ReactDOM from "react-dom/client";
// assets
import "./assets/styles/index.scss";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
