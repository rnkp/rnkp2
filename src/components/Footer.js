import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from '../images/logo-color-min.png';
import tg from '../images/tg.png';

const Footer = () => (
  <Route
    children={({ location }) => (
      <footer className={location.pathname === '/' ? 'fixed' : ''}>
        <div className="box flex">
          <div className="logo-text">
            <img src={logo} alt="Logo" className="img" />
            <p>Российская народная концептуальная программа<br/><small>© РНКП, 2011–2019</small></p>
          </div>
          <p><Link to="/privacy">Правила использования</Link></p>
        </div>

        <div className="box text-2">
            <p>
              <a href="" target="_blank"><img src={tg} alt="Tg" />Telegram</a>
              <a href="" target="_blank"><img src={tg} alt="Tg" />Github</a>
              <a href="" target="_blank"><img src={tg} alt="Tg" />YouTube</a>
            </p>
        </div>
      </footer>
    )}
  />
);

export default Footer;
