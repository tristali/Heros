import React from 'react';
import { Route as OriginRoute } from 'react-router-dom';
import { renderRoutes } from '../method';
import type { RouteType } from '../config';

function Route(props: RouteType) {
  const { routes, render, ...item } = props;
  const renderChildRoutes = routes ? renderRoutes(routes) : null;
  return (
    <OriginRoute {...item}>
      {render({})}
      {renderChildRoutes}
    </OriginRoute>
  );
}

export default Route;