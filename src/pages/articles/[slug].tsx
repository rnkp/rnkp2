import React from 'react';
import { useRouter } from 'next/router';
import App from '../app';
import HeadComponent from '../../components/Head';

import Article1, { title as title1 } from './articles/1';
import Article2, { title as title2 } from './articles/2';
import Article3, { title as title3 } from './articles/3';
import Article4, { title as title4 } from './articles/4';
import Article5, { title as title5 } from './articles/5';

import { Content } from '../../types';

const articlesList: Content = {
  1: { content: Article1, title: title1 },
  2: { content: Article2, title: title2 },
  3: { content: Article3, title: title3 },
  4: { content: Article4, title: title4 },
  5: { content: Article5, title: title5 },
};

const Article = () => {
  const router = useRouter();
  const number = Number(router.query.slug);

  return (
    <App>
      <section className="programm-page">
        <HeadComponent title={ `Статьи${articlesList[number]?.title ? ` - ${articlesList[number].title}` : ''}` } />

        <div className="box">
          <p>
            <a onClick={ () => router.back() }>назад &lt;&lt;</a>
          </p>
          <h3>Пункт { number }</h3>
          <h2>{ articlesList[number]?.title }</h2>
          { articlesList[number]?.content() }
          <a onClick={ () => router.back() }>назад &lt;&lt;</a>
        </div>
      </section>
    </App>
  )
};

export default Article;
