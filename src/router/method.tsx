import React from 'react';
import Route from './components/Route';
import type { RoutesType } from './config';

const renderRoutes = (routes: RoutesType) =>
  routes.map((item) => {
    const { name, ...props } = item;
    return <Route key={name} {...props} />;
  });

export { renderRoutes };