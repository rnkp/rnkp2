import React from 'react';
import { Route } from 'react-router-dom';

const Background = () => (
  <Route
    children={ ({ location }) => (
      <div className={ location.pathname === '/' ? 'bg' : 'bg blur' }></div>
    ) }
  />
);

export default Background;
