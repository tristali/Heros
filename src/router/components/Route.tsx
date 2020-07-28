import React from 'react';
import { Route as OriginRoute } from 'react-router-dom';
import { renderRoutes } from '../method';
import { routeInfo } from '../config';

function Route(props: routeInfo) {
  const { routes, render, ...item } = props;
  return (
    <OriginRoute {...item}>
      {render({})}
      {routes ? renderRoutes(routes) : null}
    </OriginRoute>
  );
}

export default Route;