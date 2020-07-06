import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/logo.png";

export default () => (
  <header>
    <img className="header-logo" src={logo} alt="Logo" />
    <h1 className="header-title">SHELFIE</h1>
    <Link className="header-nav-link" to="/">
      Dashboard
    </Link>
    <Link className="header-nav-link" to="/add">
      Add Inventory
    </Link>
  </header>
);
