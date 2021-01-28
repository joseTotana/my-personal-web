import React, { useState, useEffect } from "react";
import "./NavMenu.scss";
import burgerMenu from "../../assets/menu.svg";
import myLogo from "../../assets/mylogo.png";
import PropTypes from "prop-types";

const NavMenu = ({ translate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const burgerMenuClassName = "burger-menu";

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (e.target.className !== burgerMenuClassName) {
      setMenuOpen(false);
    }
  };

  return (
    <nav>
      <a href="/">
        <img className="mylogo" alt="My Logo" src={myLogo} />
      </a>

      <ul
        className="nav-links"
        style={{
          transform: menuOpen ? "translateX(0)" : "",
        }}
      >
        <li>
          <a href="/">{translate("home.header_menu.home")}</a>
        </li>
        <li>
          <a href="/about">{translate("home.header_menu.about_me")}</a>
        </li>
        <li>
          <a href="/portfolio">{translate("home.header_menu.portfolio")}</a>
        </li>
        <li>
          <a href="/contact">{translate("home.header_menu.contact")}</a>
        </li>
      </ul>
      <div className="burger-menu-container">
        <img
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className={burgerMenuClassName}
          alt="Burger Menu"
          src={burgerMenu}
        />
      </div>
    </nav>
  );
};

NavMenu.propTypes = {
  translate: PropTypes.func,
};

export default NavMenu;
