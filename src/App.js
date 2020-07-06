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
      products: [],
      selected: null
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

  setSelected = (id) => {
    this.setState({ selected: id });
  };

  render() {
    const { products, selected } = this.state;
    return (
      <div className="app">
        <Header />
        <Form selected={selected} getInventoryFn={this.getInventory} />
        <Dashboard products={products} getInventoryFn={this.getInventory} setSelectedFn={this.setSelected} />
      </div>
    );
  }
}
