import React from 'react';
import Div from './style';
import config from '../../assets/config';

const { colors } = config;

function BorderText(props:{
  children: React.ReactNode | React.FC;
  color: string;
  borderColor: string;
  borderWidth: number;
  styles?: string;
}) {
  const { children, ...theme } = props;
  return (
    <Div theme={theme}>{children}</Div>
  );
}

BorderText.defaultProps = {
  color: colors.light,
  borderColor: colors.dark,
  borderWidth: 2,
};

export default BorderText;