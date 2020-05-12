import React, { useState } from "react";
import extraCSS from "./NavBar.module.css";
import css from "./burgermenu.css";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import logo from "../../images/thisone.png";
import burgerMenu from "../../images/burgerMenu.svg";

function NavBar({ uid }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let hamburger = document.querySelector(".hamburger");

  function toggleBurger() {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      hamburger.classList.add("is-active");
    } else {
      hamburger.classList.remove("is-active");
    }
  }

  return (
    <div className={extraCSS.navBar}>
      <Link to="/">
        <img
          src={logo}
          className={extraCSS.logo}
          alt="school of code logo"
          onClick={isMenuOpen ? toggleBurger : null}
        />
      </Link>
      <button
        onClick={toggleBurger}
        class="hamburger hamburger--squeeze"
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      {isMenuOpen && (
        <Menu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          uid={uid}
          hamburger={hamburger}
        />
      )}
    </div>
  );
}

export default NavBar;
