import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../components/ScrollToTop';

import Point1 from './points/1';
import Point2 from './points/2';
import Point3 from './points/3';
import Point4 from './points/4';
import Point5 from './points/5';
import Point6 from './points/6';
import Point7 from './points/7';
import Point8 from './points/8';
import Point9 from './points/9';
import Point10 from './points/10';

const points = {
  1: Point1,
  2: Point2,
  3: Point3,
  4: Point4,
  5: Point5,
  6: Point6,
  7: Point7,
  8: Point8,
  9: Point9,
  10: Point10,
};

const Point = (props) => {
  const number = parseInt(props.match.params.number, 10);

  return (
    <section className="programm-page">
      <Helmet>
        <title>РНКП - Программа - Пункт { `${number}` }</title>
      </Helmet>
      <ScrollToTopOnMount />
      <div className="box">
        <Link to="/program">назад &lt;&lt;</Link>
        <h3>Пункт { number }</h3>
        <h2>{ points[number].title }</h2>
        { points[number].content() }
        <Link to="/program">назад &lt;&lt;</Link>
      </div>
    </section>
  )
};

export default Point;
