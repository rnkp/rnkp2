import React from 'react';
import { Route, Link } from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={ to }
    exact={ activeOnlyWhenExact }
    children={ ({ match }) => (
      <Link to={ to } className={ match ? 'active' : '' }>{ label }</Link>
    ) }
  />
);

const Header = () => (
  <header>
    <div className="box">
      <h1>
        <a href="/">Российская народная концептуальная программа</a>
      </h1>
      <nav>
        <MenuLink activeOnlyWhenExact to="/" label="Главная" />
        <MenuLink to="/about" label="О партии" />
        <MenuLink to="/program" label="Программа" />
        <MenuLink to="/evolution" label="Развитие партии" />
        <MenuLink to="/articles" label="Статьи" />
      </nav>
    </div>
  </header>
);

export default Header;
