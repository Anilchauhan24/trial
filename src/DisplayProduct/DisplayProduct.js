import { Component } from "react";
import "../CSS/DisplayProduct.css";
import QuickDisplay from "./QuickDisplay";
const url = "https://fakestoreapi.com/products";
export default class DisplayProduct extends Component {
  constructor() {
    super();
    this.state = {
      products: ""
    };
  }
  render() {
    return (
      <div className="itemcard">
        <QuickDisplay prod={this.state.products} />
      </div>
    );
  }

  componentDidMount() {
    fetch(`${url}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
        console.log(data);
      });
  }
}
