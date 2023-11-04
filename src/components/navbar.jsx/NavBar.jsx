import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-title">SHOPPING CART</div>
      <div className="nav-right">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PAGES</a>
          </li>
          <li>
            <a href="#">DOCS</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
