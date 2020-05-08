import React from "react";
import css from "./Menu.module.css";
import { logout } from "../firebase";

import { Link } from "react-router-dom";

const links = [
  { text: "My Profile", path: "/profile" },
  { text: "Messages", path: "/messages" },
  { text: "Dashboard", path: "/" },
  { text: "Companies", path: "/companies" },
  { text: "Events", path: "/events" },
  { text: "Useful Links", path: "/links" },
  { text: "Admin Dash", path: "/admin" },
];

function Menu({ isMenuOpen, setIsMenuOpen }) {
  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={css.menu}>
      <ul className={css.ul}>
        {links.map(({ text, path }) => (
          <Link key={path} to={path} className={css.link} onClick={handleClick}>
            <li>{text}</li>
          </Link>
        ))}
        <li className={css.link} onClick={logout}>
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Menu;
