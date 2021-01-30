import React, { useState, useEffect } from "react";
import "./NavMenu.scss";
import burgerMenu from "../../assets/menu.svg";
import myLogo from "../../assets/mylogo.png";
import PropTypes from "prop-types";

const NavMenu = ({ translate, Link }) => {
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
      <Link to="/">
        <img className="mylogo" alt="My Logo" src={myLogo} />
      </Link>

      <ul
        className="nav-links"
        style={{
          transform: menuOpen ? "translateX(0)" : "",
        }}
      >
        <li>
          <Link to="/">{translate("home.header_menu.home")}</Link>
        </li>
        <li>
          <Link to="/about">{translate("home.header_menu.about_me")}</Link>
        </li>
        <li>
          <Link to="/portfolio">{translate("home.header_menu.portfolio")}</Link>
        </li>
        <li>
          <Link to="/contact">{translate("home.header_menu.contact")}</Link>
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
  Link: PropTypes.object,
};

export default NavMenu;
