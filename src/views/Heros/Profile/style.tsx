import styled from 'styled-components';
import config from '../../../assets/config';

const { borderRadius, colors } = config;

const Div = styled.div`
  border: 3px solid ${colors.dark};
  margin-top: 2rem;
  background-color: ${colors.light};
  border-radius: ${borderRadius.small};
  position: relative;
  padding: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: -0.7em;
    padding: 0.5rem;
    background-color: inherit;
    border: inherit;
    border-right: 0;
    border-bottom: 0;
    transform: rotate(45deg);
    ${props => {
      const { heroId } = props.theme;
      return `left: ${25 * (heroId - 1) +12 }%;`
    }}
  }
`;
export default Div;