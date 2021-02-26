import React from 'react';
import App from './app';
import HeadComponent from '../components/Head';

const Home = () => (
  <App>
    <section className="home-page">
      <HeadComponent />
    </section>
  </App>
);

export default Home;
