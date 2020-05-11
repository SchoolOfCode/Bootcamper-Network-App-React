import React, { useState } from "react";
import extraCSS from "./NavBar.module.css";
import css from "./burgermenu.css"
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import logo from "../../images/thisone.png";
import burgerMenu from "../../images/burgerMenu.svg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleBurger() {
    var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    setIsMenuOpen(!isMenuOpen)
  })}


  return (
    <div className={extraCSS.navBar}>
      <Link to="/">
        <img src={logo} className={extraCSS.logo} alt="school of code logo" />
      </Link>
      <button onClick={toggleBurger} class="hamburger hamburger--squeeze" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>  
      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
      <hr />
    </div>
  );
}

export default NavBar;
