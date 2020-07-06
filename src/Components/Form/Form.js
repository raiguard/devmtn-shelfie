import React, { Component } from "react";
import { Link } from "react-router-dom";

import InputWithLabel from "../InputWithLabel/InputWithLabel";

import axios from "axios";
import "./Form.css";
import placeholder from "../../assets/placeholder.png";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      name: "",
      price: "0",
      id: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.getProductInfo(id);
    }
  }

  componentDidUpdate(prevProps) {
    const idPrev = prevProps.match.params.id;
    const idCurrent = this.props.match.params.id;
    if (idPrev && !idCurrent) {
      this.setState({
        img: "",
        name: "",
        price: "0",
        id: null
      });
    }
  }

  onInputChange = (varName, currentText) => {
    if (varName === "price") {
      currentText = Math.abs(currentText);
    }
    this.setState({ [varName]: currentText });
  };

  onAddClick = () => {
    const { img, name } = this.state;
    let { price } = this.state;
    price = +price;
    axios
      .post("/api/product", { img, name, price })
      .then(() => {
        // TODO redirect here
        // this.props.getInventoryFn();
      })
      .catch((err) => console.log(err));
  };

  onSaveClick = () => {
    const { name, img, id } = this.state;
    let { price } = this.state;
    price = +price;
    axios
      .put(`/api/product/${id}`, { img, name, price })
      .then(() => {
        // TODO redirect here
        // this.props.getInventoryFn();
      })
      .catch((err) => console.log(err));
  };

  getProductInfo = (id) => {
    axios
      .get(`/api/product/${id}`)
      .then((res) => {
        const { img, name, price, id } = res.data[0];
        this.setState({ img, name, price, id });
      })
      .catch((err) => console.log(err));
  };

  fallbackToPlaceholderImg = (e) => {
    e.target.src = placeholder;
  };

  render() {
    const { img, name, price, id } = this.state;
    return (
      <section className="form">
        <div className="fill form-image">
          <img src={img} alt="Product" onError={this.fallbackToPlaceholderImg} />
        </div>
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
          <Link to="/">Cancel</Link>
          {id === null ? (
            <Link to="/" onClick={this.onAddClick}>
              Add to Inventory
            </Link>
          ) : (
            <Link to="/" onClick={this.onSaveClick}>
              Save changes
            </Link>
          )}
        </section>
      </section>
    );
  }
}
