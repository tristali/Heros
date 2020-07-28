import React from 'react';
import Route from './components/Route';
import { routesInfo } from './config';

const renderRoutes = (routes: routesInfo) =>
  routes.map((item) => {
    const { name, ...props } = item;
    return <Route key={name} {...props} />;
  });

export { renderRoutes };