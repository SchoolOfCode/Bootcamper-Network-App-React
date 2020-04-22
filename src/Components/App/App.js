import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";
import CompaniesPage from "../CompaniesPage/CompaniesPage";

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
        <Route path="/companies">
          <CompaniesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
