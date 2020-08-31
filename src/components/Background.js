import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

const Background = withRouter(({location}) => {
  console.log(location);
  return <Route
    children={ () => (
      <div className={ location.pathname === '/' ? 'bg' : 'bg blur' }></div>
    ) }
  />
});

export default Background;
