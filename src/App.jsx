import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomerList from "./CustomerList";
//import { Route } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
          
        <Routes>
          
          <Route path="/" element={ <Login/> } />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/customers" element={<CustomerList/>} />
          <Route path="/cart" element={<ShoppingCart/>} />
          <Route path="*" element={<NoMatchPage/>} />
          
        </Routes>
      
      </Router>
    );
  }
}
