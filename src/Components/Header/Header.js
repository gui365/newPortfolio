import React from "react";
import "./Header.css";
import "../../App.css";

const Header = () => (
  <nav className="top-to-bottom header flex-row align-center justify-between">
    <div className="brand-div flex-row align-center">
      <div className="logo-div flex-row align-center justify-center">
        <img className="header-logo" src="./images/gb-logo-tr.png" alt="Guillermo's logo"/>
      </div>
      <h3 className="header-name">Guillermo Barila</h3>
    </div>
    <ul className="header-options flex-row">
      <li className="header-option">About</li>
      <li className="header-option">Projects</li>
      <li className="header-option">Skills</li>
      <li className="header-option">Contact</li>
    </ul>
  </nav>
)

export default Header;