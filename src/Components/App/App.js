import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";
import CompaniesPage from "../CompaniesPage/CompaniesPage";
import CompanyPage from "../CompaniesPage/CompanyPage";

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
        <Route path="/company/:company_id">
          <CompanyPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
