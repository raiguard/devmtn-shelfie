import React, { Component } from "react";

import InputWithLabel from "../InputWithLabel/InputWithLabel";

import axios from "axios";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      name: "",
      price: "0"
    };
  }

  onInputChange = (varName, currentText) => {
    this.setState({ [varName]: currentText });
  };

  onCancelClick = () => {
    this.resetState();
  };

  onSubmitClick = () => {
    const { name, price, img } = this.state;
    axios
      .post("/api/product", { name, price, img })
      .then(() => {
        this.props.getInventoryFn();
        this.resetState();
      })
      .catch((err) => console.log(err));
  };

  resetState = () => {
    this.setState({
      img: "",
      name: "",
      price: "0"
    });
  };

  render() {
    const { img, name, price } = this.state;
    return (
      <div className="form">
        <img src="" alt="TODO" />
        <InputWithLabel label="Image URL:" currentText={img} onChangeFn={this.onInputChange} varName="img" type="url" />
        <InputWithLabel
          label="Product Name:"
          currentText={name}
          onChangeFn={this.onInputChange}
          varName="name"
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
