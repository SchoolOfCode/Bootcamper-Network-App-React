import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <Link to="/profile" className="link">
          <li>My Profile</li>
        </Link>
        <Link to="/messages" className="link">
          <li>Messages</li>
        </Link>
        <Link to="/dash" className="link">
          <li>Dashboard</li>
        </Link>
        <Link to="/companies" className="link">
          <li>Companies</li>
        </Link>
        <Link to="/events" className="link">
          <li>Events</li>
        </Link>
        <Link to="/settings" className="link">
          <li>Settings</li>
        </Link>
        <Link to="/logout" className="link">
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
