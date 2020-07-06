import React, { Component } from "react";
import "./Product.css";

export default class Dashboard extends Component {
  render() {
    const { data } = this.props;
    return (
      <section className="product">
        <img className="product-image" src={data.img} />
        {/* <div className="product-image-container">
        </div> */}
        <div className="product-description-container">
          <p>Name: {data.name}</p>
          <p>Price: {data.price}</p>
        </div>
      </section>
    );
  }
}
