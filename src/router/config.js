import React from 'react';
import { Redirect } from 'react-router-dom';
import List from '../views/List';
import Profile from '../views/Profile';
import NotFound404 from '../views/NotFound404';

const config = {
  routes: [{
    name: 'heroes',
    path: '/heroes',
    render: () => <List />,
    routes:[{
      name: 'heroId',
      path: '/heroes/:heroId',
      component: Profile,
    }],
  },{
    name: 'index',
    path: '/',
    render: () => <Redirect to='/heroes' />,
    exact: true,
  },{
    name: 'notFound404',
    path: '*',
    render: () => <NotFound404 />,
  }]
}

export default config;