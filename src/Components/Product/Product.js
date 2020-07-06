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
        <div className="product-image">
          <img src={data.img} alt="Product" />
        </div>
        <div className="product-right-side-container">
          <div>
            <h2>{data.name}</h2>
            <h3>${data.price}</h3>
          </div>
          <div className="product-buttons-container">
            <Link className="product-button" onClick={this.onDeleteButtonClick}>
              Delete
            </Link>
            <Link className="product-button" to={`/edit/${data.id}`}>
              Edit
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
