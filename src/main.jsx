import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "./components/navbar.jsx/NavBar";
import { MainSection } from "./components/main-section/MainSection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <MainSection />
  </React.StrictMode>
);
