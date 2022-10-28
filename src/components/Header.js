import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="react logo" />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </header>
  );
}

export default Header;
