import React, { Fragment } from 'react';
import config from '../../assets/config';
import Header from '../../components/Header';

function List() {
  const { colors } = config;
  return (
    <Fragment>
      <Header color={colors.main[1]}>HEROS</Header>
    </Fragment>
  );
}

export default List;