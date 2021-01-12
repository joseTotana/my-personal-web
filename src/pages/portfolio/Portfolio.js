import React from "react";
import PropTypes from "prop-types";
import "./Portfolio.scss";
import PortfolioCard from "./Components/PortfolioCards";
import { weatherApp, businessApp, theEditApp } from "../../utils/constants";

const Portfolio = ({ translate }) => {
  return (
    <section className="portfolio-section">
      <h1>{translate("portfolio.title")}</h1>

      <div className="portfolio-description">{translate("portfolio.description")}</div>
      <section className="portfolio-cards-section">
        <PortfolioCard translate={translate} cardName={weatherApp} />
        <PortfolioCard translate={translate} cardName={businessApp} />
        <PortfolioCard translate={translate} cardName={theEditApp} />
      </section>
    </section>
  );
};

Portfolio.propTypes = {
  translate: PropTypes.func,
};
export default Portfolio;
