import React, { Component } from "react";
import "./App.css";

import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          index: 0,
          name: "Foo",
          price: 69,
          imageUrl: "https://i.kym-cdn.com/photos/images/original/001/516/899/f31.jpg"
        },
        {
          index: 1,
          name: "Bar",
          price: 420,
          imageUrl: "https://i.kym-cdn.com/photos/images/original/001/516/899/f31.jpg"
        },
        {
          index: 2,
          name: "Baz",
          price: 69420,
          imageUrl: "https://i.kym-cdn.com/photos/images/original/001/516/899/f31.jpg"
        }
      ]
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="app">
        <Header />
        <Form />
        <Dashboard products={products} />
      </div>
    );
  }
}
