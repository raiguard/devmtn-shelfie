import React, { Component } from "react";
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
          <button onClick={() => this.props.setSelectedFn(+data.id)}>Edit</button>
        </div>
      </section>
    );
  }
}
