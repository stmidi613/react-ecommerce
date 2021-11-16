import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //executes when the component is mounted
  constructor(props) {
    super(props); //calling super class' constructor
    
    //intialization of the state
    this.state = {
      products: [
        { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
        { id: 2, productName: "Sony Camera", price: 8700, quantity: 0 },
        { id: 3, productName: "iPad", price: 4300, quantity: 0 },
        { id: 4, productName: "Samsung TV", price: 3700, quantity: 0 },
        { id: 5, productName: "XBox", price: 1200, quantity: 0 },
        { id: 6, productName: "Dell Monitor", price: 900, quantity: 0 },
      ],
    };
  }

  render() {
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
