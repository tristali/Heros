import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from './method';

function RouterView(props) {
  const { routes } = props;
  return (
    <Switch>
      {renderRoutes(routes)}
    </Switch>
  );
}

export default RouterView;