import React from "react";
import "./Header.scss";
import GBSpain from "../../assets/spain-flag.svg";
import GBFlag from "../../assets/united-kingdom-flag.svg";
import PropTypes from "prop-types";

const Header = ({ changeLanguage, currentLanguage }) => {
  const isEnglish = currentLanguage === "en";
  const isSpanish = currentLanguage === "es";
  const englishSelected = isEnglish ? "selected" : "";
  const spanishSelected = isSpanish ? "selected" : "";

  return (
    <header className="lang-selector">
      <a
        className={`cursor-pointer ${englishSelected}`}
        onClick={() => !isEnglish && changeLanguage("en")}
      >
        <img className="lang-selector-icon" alt="English" src={GBFlag} />
      </a>
      <a
        className={`cursor-pointer ${spanishSelected}`}
        onClick={() => !isSpanish && changeLanguage("es")}
      >
        <img alt="Español" src={GBSpain} />
      </a>
    </header>
  );
};

Header.propTypes = {
  changeLanguage: PropTypes.func,
  currentLanguage: PropTypes.string,
};
export default Header;
