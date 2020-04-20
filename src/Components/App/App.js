import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import Menu from "../Menu/Menu";
const logo = require("../../images/thisone.png");
const burgerMenu = require("../../images/burgerMenu.svg");

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Router>
      <div className="navBar">
        <Link to="/dash">
          <img src={logo} className="logo" alt="school of code logo" />
        </Link>
        <img
          src={burgerMenu}
          className="burgerMenu"
          alt="menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && <Menu />}
        <hr />
      </div>
      <Switch>
        <Route path="/dash">
          <Dashboard />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
