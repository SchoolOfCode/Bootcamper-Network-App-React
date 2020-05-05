import React, { useState } from "react";
import css from "./NavBar.module.css";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import logo from "../../images/thisone.png";
import burgerMenu from "../../images/burgerMenu.svg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={css.navBar}>
      <Link to="/">
        <img src={logo} className={css.logo} alt="school of code logo" />
      </Link>
      <img
        src={burgerMenu}
        className={css.burgerMenu}
        alt="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
      <hr />
    </div>
  );
}

export default NavBar;
