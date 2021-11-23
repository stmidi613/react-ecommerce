import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
console.log("constructor - product")
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    console.log("render - Product");
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              #{this.state.product.id}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>

            <h5 className="pt-2 border-top">
              {this.state.product.title}
            </h5>

            <h5 className="pt-2 description maxw">
              {this.state.product.description}
            </h5>
                
            <img src={this.state.product.image} className="img-thumbnail float-end image" alt="" />
            
            <div>${this.state.product.price}</div>
          </div>
          {/* card body ends here */}

          <div className="card-footer">
            <div className="float-left">
              <span className="badge text-black">
                {this.state.product.quantity}0
              </span>

              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>

                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            {/* float left ends here */}

            <div className="float-end m-1">{this.props.children}</div>
          </div>
          {/* card footer ends here */}
        </div>
      </div>
    );
  }
}
