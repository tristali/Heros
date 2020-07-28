import React from 'react';
import { Route as OriginRoute } from 'react-router-dom';
import { renderRoutes } from '../method';

function Route(props) {
  const { routes, render, ...item } = props;
  if (routes) {
    const renderChildRoutes = renderRoutes(routes);
    return <OriginRoute {...item}>
      {render()}
      {renderChildRoutes}
    </OriginRoute>;
  }
  return <OriginRoute render={render} {...item} />;
}

export default Route;