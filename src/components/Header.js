import React from "react";
import logo from "../logo.svg";

function Header(props) {
  return (
    <header className={props.darkMode ? "dark" : ""}>
      <img src={logo} className="logo" alt="react logo" />
      <h3>ReactFacts</h3>
      <div onClick={props.toggleDarkMode}>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
