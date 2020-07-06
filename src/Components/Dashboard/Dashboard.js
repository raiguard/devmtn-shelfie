import React, { Component } from "react";

import Product from "../Product/Product";

import axios from "axios";

export default class Dashboard extends Component {
  deleteProduct = (id) => {
    axios
      .delete(`/api/product/${id}`)
      .then(() => this.props.getInventoryFn())
      .catch((err) => console.log(err));
  };
  render() {
    const { products } = this.props;
    return (
      <section>
        {products.map((product, i) => (
          <Product key={i} data={product} deleteProductFn={this.deleteProduct} />
        ))}
      </section>
    );
  }
}
