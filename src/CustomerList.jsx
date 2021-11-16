import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Steve",
        phone: "555 - 5555",
        address: { city: "London" },
        photo: "https://picsum.photos/id/1012/60",
      },
      { id: 2, 
        name: "Mike", 
        phone: "555 - 5555", 
        address: { city: "Berlin" }, 
        photo: "https://picsum.photos/id/1013/60",

      },
      { id: 3, 
        name: "Henry", 
        phone: null, 
        address: { city: "New York" }, 
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
          
          {this.state.customers.map((cust, index) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td><img src={cust.photo} alt="Customer" />
                  <div>
                    <button className="btn btn-sm btn-secondary" onClick={ 
                      () => { this.onChangePictureClick(cust, index);}}>
                      Change Picture
                    </button>
                  </div>
                  </td>
                  <td>{cust.name}</td>
                  <td>
                    {cust.phone ? (
                      cust.phone
                    ) : (
                      <div className="bg-warning p-2">No Phone</div>
                    )}
                  </td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  //Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {

    //get existing customers
    var custArr = this.state.customers;
    custArr[index].photo="https://picsum.photos/id/104/60";
    this.setState({ customers: custArr });
  }
 
  //Executes when the user clicks on Refresh button.
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
}
