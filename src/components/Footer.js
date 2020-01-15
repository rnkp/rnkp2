import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from '../images/logo-color-min.png';
import tg from '../images/tg_logo.png';
import patreon from '../images/patreon_logo.png';
import youtube from '../images/youtube_logo.png';
import github from '../images/github_logo.png';

const Footer = () => (
  <Route
    children={({ location }) => (
      <footer className={location.pathname === '/' ? 'fixed' : ''}>
        <div className="box flex">
          <div className="logo-text">
            <img src={logo} alt="Logo" className="img" />
            <p>Российская народная концептуальная программа<br/><small>© РНКП, 2011–2020</small></p>
          </div>
          <p className="links links-center">
            <a href="https://www.patreon.com/rnkp" target="_blank" title="Patreon" rel="noopener noreferrer"><img src={patreon} alt="patreon" /></a>
            <a href="https://t.me/rnkp_chat" target="_blank" title="Telegram канал" rel="noopener noreferrer"><img src={tg} alt="telegram" /></a>
            <a href="https://www.youtube.com/channel/UCBvaHX3Ci3JNYC1Idd4NiAg" target="_blank" title="Youtube канал" rel="noopener noreferrer"><img src={youtube} alt="youtube" /></a>
            <a href="https://github.com/rnkp" target="_blank" title="Github" rel="noopener noreferrer"><img src={github} alt="github" /></a>
          </p>
          <p><Link to="/privacy">Правила использования</Link></p>
        </div>

        <div className="box text-2">
            <p className="links">
              <a href="https://www.patreon.com/rnkp" target="_blank" title="Patreon" rel="noopener noreferrer"><img src={patreon} alt="patreon" /></a>
              <a href="https://t.me/rnkp_chat" target="_blank" title="Telegram канал" rel="noopener noreferrer"><img src={tg} alt="telegram" /></a>
              <a href="https://www.youtube.com/channel/UCBvaHX3Ci3JNYC1Idd4NiAg" target="_blank" title="Youtube канал" rel="noopener noreferrer"><img src={youtube} alt="youtube" /></a>
              <a href="https://github.com/rnkp" target="_blank" title="Github" rel="noopener noreferrer"><img src={github} alt="github" /></a>
            </p>
        </div>
      </footer>
    )}
  />
);

export default Footer;
