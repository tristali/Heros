import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from './method';
import type { RoutesType } from './config';

function RouterView(props: { 
  routes: RoutesType; 
}) {
  const { routes } = props;
  return <Switch>{renderRoutes(routes)}</Switch>;
}

export default RouterView;