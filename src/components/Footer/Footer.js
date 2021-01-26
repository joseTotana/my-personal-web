import React from "react";
import PropTypes from "prop-types";
import "./Footer.scss";

const Footer = ({ translate }) => {
  return <footer className="footer-section">© 2021 {translate("footer")}</footer>;
};

export default Footer;
Footer.propTypes = {
  translate: PropTypes.func,
};
