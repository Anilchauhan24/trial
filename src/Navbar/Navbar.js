import { Component } from "react";
import AddtoCart from "./AddtoCart";
import "../CSS/Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <h1>Personal Brand</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Services</li>
          </ul>
          <div className="cart">
            <AddtoCart />
          </div>
        </nav>
      </div>
    );
  }
}
