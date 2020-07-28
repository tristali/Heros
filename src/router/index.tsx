import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from './method';
import { configInfo } from './config';

function RouterView(props: configInfo) {
  const { routes } = props;
  return <Switch>{renderRoutes(routes)}</Switch>;
}

export default RouterView;