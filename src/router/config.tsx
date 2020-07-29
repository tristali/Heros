import React from 'react';
import { Redirect } from 'react-router-dom';
import List from '../views/Heros/List';
import Profile from '../views/Heros/Profile';
import NotFound404 from '../views/NotFound404';

type routeInfo = {
  name?: string;
  path: string;
  render: React.FC;
  exact?: boolean;
  routes?: routesInfo;
}

type routesInfo = routeInfo[]

type configInfo = { routes: routesInfo };

const config: configInfo = {
  routes: [
    {
      name: 'heroes',
      path: '/heroes',
      render: () => <List />,
      routes: [
        {
          name: 'heroId',
          path: '/heroes/:heroId',
          render: () => <Profile />,
        },
      ],
    },
    {
      name: 'index',
      path: '/',
      render: () => <Redirect to="/heroes" />,
      exact: true,
    },
    {
      name: 'notFound404',
      path: '*',
      render: () => <NotFound404 />,
    },
  ],
};

export default config;
export type { configInfo, routesInfo, routeInfo };