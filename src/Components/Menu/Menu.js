import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

function Menu({ isMenuOpen, setIsMenuOpen }) {
  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="menu">
      <ul>
        <Link to="/profile" className="link" onClick={handleClick}>
          <li>My Profile</li>
        </Link>
        <Link to="/messages" className="link" onClick={handleClick}>
          <li>Messages</li>
        </Link>
        <Link to="/dash" className="link" onClick={handleClick}>
          <li>Dashboard</li>
        </Link>
        <Link to="/companies" className="link" onClick={handleClick}>
          <li>Companies</li>
        </Link>
        <Link to="/events" className="link" onClick={handleClick}>
          <li>Events</li>
        </Link>
        <Link to="/settings" className="link" onClick={handleClick}>
          <li>Settings</li>
        </Link>
        <Link to="/logout" className="link" onClick={handleClick}>
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
