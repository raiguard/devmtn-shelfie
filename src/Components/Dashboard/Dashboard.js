import React, { Component } from "react";

import Product from "../Product/Product";

export default class Dashboard extends Component {
  render() {
    const { products } = this.props;
    return (
      <section>
        {products.map((product, i) => (
          <Product key={i} data={product} />
        ))}
      </section>
    );
  }
}
