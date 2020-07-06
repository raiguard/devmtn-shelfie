import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Product.css";

export default class Dashboard extends Component {
  onDeleteButtonClick = () => {
    const { data, deleteProductFn } = this.props;
    deleteProductFn(data.id);
  };
  render() {
    const { data } = this.props;
    return (
      <section className="product">
        <img className="product-image" src={data.img} alt="Product" />
        <div className="product-description-container">
          <p>Name: {data.name}</p>
          <p>Price: {data.price}</p>
          <button onClick={this.onDeleteButtonClick}>Delete</button>
          <Link to={`/edit/${data.id}`}>Edit</Link>
        </div>
      </section>
    );
  }
}
