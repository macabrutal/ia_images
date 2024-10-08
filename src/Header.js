// Header.js

import React from "react";
import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={process.env.PUBLIC_URL + "/img/logo-prompteo.png"}
          alt="Prompteo Logo"
          className="logo"
        />
      </div>
      <nav className="nav-bar"></nav>
    </header>
  );
};

export default Header;
