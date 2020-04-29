import React from "react";
import css from "./Menu.module.css";
import { logout } from "../firebase";

import { Link } from "react-router-dom";

function Menu({ isMenuOpen, setIsMenuOpen }) {
  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={css.menu}>
      <ul className={css.ul}>
        <Link to="/profile/mell" className={css.link} onClick={handleClick}>
          <li>My Profile</li>
        </Link>
        <Link to="/messages" className={css.link} onClick={handleClick}>
          <li>Messages</li>
        </Link>
        <Link to="/dash" className={css.link} onClick={handleClick}>
          <li>Dashboard</li>
        </Link>
        <Link to="/companies" className={css.link} onClick={handleClick}>
          <li>Companies</li>
        </Link>
        <Link to="/events" className={css.link} onClick={handleClick}>
          <li>Events</li>
        </Link>
        <Link to="/settings" className={css.link} onClick={handleClick}>
          <li>Settings</li>
        </Link>
        <Link to="/signin" className={css.link} onClick={handleClick}>
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
