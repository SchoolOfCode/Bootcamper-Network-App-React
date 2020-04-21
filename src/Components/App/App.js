import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/dash">
          <Dashboard />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
