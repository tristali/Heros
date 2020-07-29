import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from './method';
import { routesInfo } from './config';

function RouterView(props: { 
  routes: routesInfo; 
}) {
  const { routes } = props;
  return <Switch>{renderRoutes(routes)}</Switch>;
}

export default RouterView;