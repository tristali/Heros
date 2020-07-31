import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import config from '../../assets/config';
import Button from '../../components/Button';

function NotFound404() {
  const { colors } = config;
  return (
    <Fragment>
      <Header color={colors.main[1]}>
        NotFound404
      </Header>
      <Link to={`/`}><Button>Home</Button></Link>
    </Fragment>
  );
}

export default NotFound404;