import React from 'react';
import Div from './style';

function DotBackground(props:{
  children: React.ReactNode | React.FC;
  color: string [];
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