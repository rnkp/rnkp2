import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const NoMatch = () => (
  <section className="privacy-page">
    <Helmet>
      <title>РНКП - Российская народная концептуальная программа</title>
    </Helmet>
    <div className="box">
      <h2>Запрашиваемая страница не найдена</h2>
      <Link to={"/"}>На главную</Link>
    </div>
  </section>
);

export default NoMatch;

