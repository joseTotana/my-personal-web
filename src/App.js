import React, { Suspense, useState, useEffect } from "react";
import { Home, About, Portfolio, Contact } from "./pages";
import i18n from "./i18n";
import { withTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header, Footer } from "./components";
import { useTranslation } from "react-i18next";
import myLogo from "./assets/mylogo.png";
import burgerMenu from "./assets/menu.svg";

function App() {
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;
  const { t } = useTranslation();
  const props = { translate: t, changeLanguage, currentLanguage };

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Header changeLanguage={changeLanguage} currentLanguage={currentLanguage} />
      <Router>
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
              <Link to="/">{t("home.header_menu.home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("home.header_menu.about_me")}</Link>
            </li>
            <li>
              <Link to="/portfolio">{t("home.header_menu.portfolio")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("home.header_menu.contact")}</Link>
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
        <Switch>
          <Route path="/" exact render={() => <Home {...props} />} />
          <Route path="/about" render={() => <About {...props} />} />
          <Route path="/portfolio" render={() => <Portfolio {...props} />} />
          <Route path="/contact" render={() => <Contact {...props} />} />
        </Switch>
      </Router>
      <Footer {...props} />
    </Suspense>
  );
}

export default withTranslation()(App);
