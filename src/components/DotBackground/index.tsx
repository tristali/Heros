import React from 'react';
import Div from './style';

type backgroundColor = string[];

function DotBackground(props:{
  children: React.ReactNode | React.FC;
  color: backgroundColor;
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
};


export default DotBackground;
export type { backgroundColor };