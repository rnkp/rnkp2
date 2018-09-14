import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Background = () => (
  <Route
    children={({ location }) => (
      <div className={location.pathname === '/' ? 'bg' : 'bg blur'}></div>
    )}
  />
);

export default Background;
