import React, { Suspense } from "react";
import { Home, About, Portfolio, Contact } from "./pages";
import i18n from "./i18n";
import { withTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header, Footer, NavMenu } from "./components";
import { useTranslation } from "react-i18next";
import TetrisPage from "./pages/tetris/TetrisPage";

function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;
  const { t } = useTranslation();
  const props = { translate: t, changeLanguage, currentLanguage };

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Router>
        <Header changeLanguage={changeLanguage} currentLanguage={currentLanguage} />
        <NavMenu translate={t} Link={Link} />
        <Switch>
          <Route path="/" exact render={() => <Home {...props} />} />
          <Route path="/about" render={() => <About {...props} />} />
          <Route path="/portfolio">
            <Route exact path="/portfolio" render={() => <Portfolio {...props} />} />
            <Route path="/portfolio/tetris" render={() => <TetrisPage {...props} />} />
          </Route>
          <Route path="/contact" render={() => <Contact {...props} />} />
        </Switch>
      </Router>
      <Footer {...props} />
    </Suspense>
  );
}

export default withTranslation()(App);
