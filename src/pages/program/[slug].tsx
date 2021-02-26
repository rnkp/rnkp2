import React from 'react';
import { useRouter } from 'next/router';
import App from '../app';
import HeadComponent from '../../components/Head';

import Point1, { title as title1 } from './points/1';
import Point2, { title as title2 } from './points/2';
import Point3, { title as title3 } from './points/3';
import Point4, { title as title4 } from './points/4';
import Point5, { title as title5 } from './points/5';
import Point6, { title as title6 } from './points/6';
import Point7, { title as title7 } from './points/7';
import Point8, { title as title8 } from './points/8';
import Point9, { title as title9 } from './points/9';
import Point10, { title as title10 } from './points/10';

import { Content } from '../../types';

export const pointsList: Content = {
  1: { content: Point1, title: title1 },
  2: { content: Point2, title: title2 },
  3: { content: Point3, title: title3 },
  4: { content: Point4, title: title4 },
  5: { content: Point5, title: title5 },
  6: { content: Point6, title: title6 },
  7: { content: Point7, title: title7 },
  8: { content: Point8, title: title8 },
  9: { content: Point9, title: title9 },
  10: { content: Point10, title: title10 },
};

const Point = () => {
  const router = useRouter();
  const number = Number(router.query.slug);

  return (
    <App>
      <section className="programm-page">
        <HeadComponent title={ `Программа - Пункт ${number}. ${pointsList[number]?.title}` } />

        <div className="box">
          <p>
            <a onClick={ () => router.back() }>назад &lt;&lt;</a>
          </p>
          <h3>Пункт { number }</h3>
          <h2>{ pointsList[number]?.title }</h2>
          { pointsList[number]?.content() }
          <a onClick={ () => router.back() }>назад &lt;&lt;</a>
        </div>
      </section>
    </App>
  )
};

export default Point;
