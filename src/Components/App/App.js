import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
const logo = require("../../images/thisone.png");
const burgerMenu = require("../../images/burgerMenu.svg");

function App() {
  return (
    <Router>
      <div className="navBar">
        <Link to="/dash">
          <img src={logo} className="logo" alt="school of code logo" />
        </Link>
        <img src={burgerMenu} className="burgerMenu" alt="menu" />
        <hr />
      </div>
      <Switch>
        <Route path="/dash">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
