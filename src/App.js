import React from "react";

import Header from "./Components/Header/Header";

import "./App.css";
import routes from "./routes";

export default () => (
  <div className="app">
    <Header />
    {routes}
  </div>
);
