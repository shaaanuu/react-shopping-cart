import React from "react";
import "./MainSection.css";
import YourCart from "../your-cart/YourCart";

export const MainSection = () => {
  return (
    <div className="main-sec">
      <div className="main-title">Your Cart</div>
      <YourCart />
    </div>
  );
};
