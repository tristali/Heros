import React from 'react';
import Div from './style';
import BoomDialog from '../../assets/components/BoomDialog'
import BorderText from '../BorderText';
import config from '../../assets/config';

const { colors } = config;

function Header(props:{
  children: string;
  color: string;
}) {
  const { children, color } = props;
  const textStyle = 'position: absolute; top: 30%; width: 100%;'
  return (
    <Div>
      <BoomDialog />
      <BorderText color={color} styles={textStyle}>
        <h1>{children}</h1>
      </BorderText>
    </Div>
  );
};


Header.defaultProps = {
  color: colors.light,
};

export default Header;