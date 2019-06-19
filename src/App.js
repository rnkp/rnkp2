import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Routes from './Routes';
import Footer from './components/Footer';
import Header from './components/Header';
import Background from './components/Background';

const Main = () => (
  <Router>
    <article>
      <Background />

      <Header />

      <Switch>
        {Routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>

      <Footer />
    </article>
  </Router>
);

export default Main;
