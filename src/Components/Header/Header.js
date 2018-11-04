import React from "react";
import "./Header.css";
import "../../App.css";

const Header = () => (
  <nav className="header flex-row align-center justify-between">
    <div>
      <h3>Guillermo Barila</h3>
    </div>
    <ul className="flex-row">
      <li className="header-option">About</li>
      <li className="header-option">Projects</li>
      <li className="header-option">Skills</li>
      <li className="header-option">Contact</li>
    </ul>
  </nav>
)

export default Header;