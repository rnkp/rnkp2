import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = ({ children }: { children: JSX.Element }) => (
  <article>
    <Background />

    <Header />

    { children }

    <Footer />
  </article>
);

export default App;
