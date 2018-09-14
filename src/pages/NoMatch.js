import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Link } from 'react-router-dom';

const NoMatch = () => (
  <section className="not-found-page">
    <Helmet>
      <title>РНКП - Ошибка 404</title>
    </Helmet>
    <div className="box">
      <h3>Запрашиваемая страница не найдена</h3>
      <Link to="/">На главную</Link>
    </div>
  </section>
);

export default NoMatch;
