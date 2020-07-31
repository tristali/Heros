import styled from 'styled-components';
import config from '../../assets/config';

const { borderRadius, colors } = config;
const setBorderRadius = (color: string) =>`
  border-radius: ${borderRadius.large}; 
  border: solid 3px ${color};
`;

const Div = styled.div`
  > span > img {
    ${setBorderRadius(colors.light)};
    width: 100%;
    height: auto;
    display: list-item;
  }
  > span {
    ${setBorderRadius(colors.dark)};
  }
    max-width: 210px;
    margin: 0 auto;
  }}
`;

export default Div;