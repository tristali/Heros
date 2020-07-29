import React from 'react';
import Div from './style';
import BoomDialog from '../../assets/components/BoomDialog'
import BorderText from '../BorderText';

function Header(props:{
  children: React.ReactNode | React.FC;
  color: string;
}) {
  const { children, color } = props;
  const textStyle = 'position: absolute; top: 27%; width: 100%;'
  return (
    <Div>
      <BoomDialog />
      <BorderText color={color} styles={textStyle}>
        <h1>{children}</h1>
      </BorderText>
    </Div>
  );
}

export default Header;