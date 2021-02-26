import React from 'react';
import Link from 'next/link';
import App from './app';
import HeadComponent from '../components/Head';

export default function Custom404() {
  return (
    <App>
      <section className="privacy-page">
        <HeadComponent title={ 'Запрашиваемая страница не найдена' } />
        <div className="box">
          <h2>Запрашиваемая страница не найдена</h2>
          <Link href={ "/" }>На главную</Link>
        </div>
      </section>
    </App>
  );
};

