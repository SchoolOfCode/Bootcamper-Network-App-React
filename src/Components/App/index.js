import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import Meetup from '../MeetUp'


function App() {
  return (
    <Router>
      <NavBar />
      <Meetup/>
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
