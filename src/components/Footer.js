import React from 'react';
import { Route, Link } from 'react-router-dom';

const Footer = () => (
  <Route
    children={({ location }) => (
      <footer className={location.pathname === '/' ? 'fixed' : ''}>
        <div className="box">
          <div className="footer_logo left"></div>
          <p>Российская народная концептуальная программа. 2018. Почёт и процветание. <Link to="/privacy">Все права сохранены &copy;</Link></p>
          <div className="clear"></div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
