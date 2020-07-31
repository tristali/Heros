import styled from 'styled-components';
import config from '../../assets/config';

const { fonts, borderRadius, hoverShadow } = config;

const Button = styled.button`
  margin: 0.2rem;
  font-weight: ${fonts.weights.bold};
  ${props => {
  const { color, borderWidth, styles, isIcon, disabled } = props.theme;
  const buttonStyles = [];
  buttonStyles.push(`
    border: solid ${borderWidth} ${color};
    color: ${color};`);
  if (!disabled) {
    buttonStyles.push(`${hoverShadow};
      cursor: pointer;`);
  } else {
    buttonStyles.push(`opacity: 0.5;`);
  }
  if (!isIcon) {
    buttonStyles.push(`
      padding: 0.5rem 1rem;
      border-radius: ${borderRadius.small};
    `);
  } else {
    buttonStyles.push(`
      width: 2.3rem;
      height: 2.3rem;
      border-radius: ${borderRadius.large};
    `);
  }
  if (styles) {
    buttonStyles.push(styles);
  }
  return buttonStyles.join(' ');
  }}
`;

export default Button;