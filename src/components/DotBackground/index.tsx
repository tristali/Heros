import React from 'react';
import Div from './style';
import config from '../../assets/config';

type BackgroundColorType = string[];
const { colors } = config;

function DotBackground(props:{
  children: React.ReactNode | React.FC;
  color: BackgroundColorType;
  fullVersion: boolean;
  styles?: string;
}) {
  const { children, ...theme } = props;
  return (
    <Div theme={theme}>{children}</Div>
  );
}

DotBackground.defaultProps = {
  fullVersion: false,
  color: colors.main,
};


export default DotBackground;
export type { BackgroundColorType };