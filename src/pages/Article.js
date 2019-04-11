import React from 'react';
import { Helmet } from 'react-helmet';
import {  Link } from 'react-router-dom';
import ScrollToTopOnMount from '../components/ScrollToTop';

import Article1 from './articles/1';
import Article2 from './articles/2';
import Article3 from './articles/3';
import Article4 from './articles/4';
import Article5 from './articles/5';

const articles = {
  1: Article1,
  2: Article2,
  3: Article3,
  4: Article4,
  5: Article5,
};

const Article = (props) => {
  const number = parseInt(props.match.params.number, 10);

  return (
    <section className="article-page">
      <Helmet>
        <title>РНКП - Статьи | {`${articles[number].title}`}</title>
      </Helmet>
      <ScrollToTopOnMount />
      <div className="box">
        <Link to="/articles">назад &lt;&lt;</Link>
        <h2>{articles[number].title}</h2>
        {articles[number].content()}
        <Link to="/articles">назад &lt;&lt;</Link>
      </div>
    </section>
  )
};

export default Article;
