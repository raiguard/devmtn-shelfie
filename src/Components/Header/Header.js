import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render = () => (
    <header>
      <Link to="/">Dashboard</Link>
      <Link to="/add">Add a product</Link>
    </header>
  );
}
