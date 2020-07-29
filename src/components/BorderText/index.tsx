import React from 'react';
import Div from './style';

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
  color: '#fff',
  borderColor: '#000',
  borderWidth: 2,
};

export default BorderText;