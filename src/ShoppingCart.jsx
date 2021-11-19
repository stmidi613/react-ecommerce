import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //executes when the component is mounted
  constructor(props) {
    //console.log("constructor - ShoppingCart")
    super(props); //calling super class' constructor or the Component Class

    //intialization of the state
    this.state = {
      products: [],
    };
  }

  render() {
    //console.log("render - ShoppingCart")
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //render ends here

  //Executes after constructor and render method executes
  componentDidMount = async () => {
    //fetch data from data source
    var response = await fetch("react-db.json", {
      method: "Get",
    });
    var prods = await response.json();

    this.setState({ products: prods });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate - ShoppingCart",
      prevProps,
      prevState,
      this.props,
      this.state
    );

    //  if(prevProps.x != this.props.x){
    //make http call
    //}
  }

  componentWillUnmount() {
    //console.log("componentWillUnMount - Product");
  }

  componentDidCatch(error, info) {
    //console.log("componentDidCatch - ShoppinCart");
    //console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  //increments the number of products when user clicks + button
  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      this.setState({ products: allProducts });
    }
  };

  //decrements the number of products when user clicks - button
  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      this.setState({ products: allProducts });
    }
  };

  //executes when user clicks the (X) icon button in Product Component
  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete this item?")) {
      //delete product based on index
      allProducts.splice(index, 1);

      this.setState({ products: allProducts });
    }
  };
}
