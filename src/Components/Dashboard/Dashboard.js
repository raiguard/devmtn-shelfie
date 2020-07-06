import React, { Component } from "react";

import Product from "../Product/Product";

import axios from "axios";

export default class Dashboard extends Component {
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

  deleteProduct = (id) => {
    axios
      .delete(`/api/product/${id}`)
      .then(() => this.getInventory())
      .catch((err) => console.log(err));
  };

  render() {
    const { products } = this.state;
    return (
      <section className="dashboard">
        {products.map((product, i) => (
          <Product key={i} data={product} deleteProductFn={this.deleteProduct} />
        ))}
      </section>
    );
  }
}
