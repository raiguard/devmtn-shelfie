import React, { Component } from "react";
import "./Form.css";

import InputWithLabel from "./InputWithLabel/InputWithLabel";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      productName: "",
      price: "0"
    };
  }

  onInputChange = (varName, currentText) => {
    this.setState({ [varName]: currentText });
  };

  onCancelClick = () => {
    this.setState({
      imageUrl: "",
      productName: "",
      price: "0"
    });
  };

  onSubmitClick = () => {
    alert("TODO: SUBMIT");
  };

  render() {
    const { imageUrl, productName, price } = this.state;
    return (
      <div className="form">
        <img src="" />
        <InputWithLabel
          label="Image URL:"
          currentText={imageUrl}
          onChangeFn={this.onInputChange}
          varName="imageUrl"
          type="url"
        />
        <InputWithLabel
          label="Product Name:"
          currentText={productName}
          onChangeFn={this.onInputChange}
          varName="productName"
          type="text"
        />
        <InputWithLabel
          label="Price:"
          currentText={price}
          onChangeFn={this.onInputChange}
          varName="price"
          type="number"
          min="0"
        />
        <section className="form-button-row">
          <button onClick={this.onCancelClick}>Cancel</button>
          <button onClick={this.onSubmitClick}>Submit</button>
        </section>
      </div>
    );
  }
}
