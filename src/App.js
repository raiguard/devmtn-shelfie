import React, { Component } from "react";

import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory = () => {
    axios
      .get("/api/inventory")
      .then((res) => this.setState({ products: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    const { products } = this.state;
    return (
      <div className="app">
        <Header />
        <Form getInventoryFn={this.getInventory} />
        <Dashboard products={products} getInventoryFn={this.getInventory} />
      </div>
    );
  }
}
