import React, { Component } from "react";

import InputWithLabel from "../InputWithLabel/InputWithLabel";

import axios from "axios";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    const { selected } = this.props;
    this.state = {
      img: "",
      name: "",
      price: "0",
      selected
    };
  }

  componentDidUpdate(prevProps) {
    const { selected } = this.props;
    if (prevProps.selected !== selected) {
      this.setState({ selected });
      if (selected !== null) {
        axios.get(`/api/product/${selected}`).then((res) => {
          const { img, name, price } = res.data[0];
          this.setState({ img, name, price });
        });
      }
    }
  }

  onInputChange = (varName, currentText) => {
    this.setState({ [varName]: currentText });
  };

  onCancelClick = () => {
    this.resetState();
  };

  onAddClick = () => {
    const { name, price, img } = this.state;
    axios
      .post("/api/product", { name, price, img })
      .then(() => {
        this.props.getInventoryFn();
        this.resetState();
      })
      .catch((err) => console.log(err));
  };

  onSaveClick = () => {
    const { name, price, img, selected } = this.state;
  };

  resetState = () => {
    this.setState({
      img: "",
      name: "",
      price: "0",
      selected: null
    });
  };

  render() {
    const { img, name, price, selected } = this.state;
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
          {selected === null ? (
            <button onClick={this.onAddClick}>Add product</button>
          ) : (
            <button onClick={this.onSaveClick}>Save changes</button>
          )}
        </section>
      </div>
    );
  }
}
