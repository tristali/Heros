import React from 'react';
import { default as StyledButton } from './style';
import config from '../../assets/config';

const { colors } = config;
type IconButtonType = {
  children: React.ReactNode | React.FC | string;
  color: string;
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  styles?: string;
}
type ButtonType = IconButtonType & {
  borderWidth: string;
  isIcon: boolean;
}

function Button(props: ButtonType) {
  const { children, onClick, ...theme } = props;
  const item = typeof children === 'string' ? children.toUpperCase() : children;
  const handleClick = props.disabled ? () => { } : onClick;
  return (
    <StyledButton onClick={handleClick} theme={theme}>{item}</StyledButton>
  );
};

Button.defaultProps = {
  color: colors.dark,
  borderWidth: '2px',
  isIcon: false,
  disabled: false,
};

export default Button;
export type { IconButtonType };