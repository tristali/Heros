import React from 'react';
import Header from '../../components/Header';
import config from '../../assets/config';

function NotFound404() {
  const { colors } = config;
  return (
    <Header color={colors.main[1]}>
      NotFound404
    </Header>
  );
}

export default NotFound404;