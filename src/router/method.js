import React from 'react';
import Route from './components/Route';

const renderRoutes = (routes) => routes.map((item) => {
  const { name, ...props } = item;
  return <Route key={name} {...props} />
})

export { renderRoutes };