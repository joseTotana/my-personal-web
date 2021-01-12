import React from "react";
// import { useMediaQuery } from "react-responsive";
import "./Home.scss";
import { TypingAnimation } from "../../components";
import PropTypes from "prop-types";

const Home = (props) => {
  // const isOnDesktop = useMediaQuery({ query: "(min-device-width: 1025px)" });
  const { translate } = props;

  return (
    <section className="home-section">
      <div className="hello-text">HOLA</div>
      <TypingAnimation translate={translate} />
    </section>
  );
};
Home.propTypes = {
  translate: PropTypes.func,
};
export default Home;
