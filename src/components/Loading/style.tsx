import styled from 'styled-components';
import config from '../../assets/config';

const { colors } = config;
const base = 1;
const unit = 'rem';
const boxSize = base * 10;
const dotSize = base * 1.5;
const Div = styled.div`
    display: inline-block;
    position: relative;
    width: ${boxSize}${unit};
    height: ${boxSize}${unit};
  div {
    position: absolute;
    top: ${(boxSize - dotSize) / 2}${unit};
    width: ${dotSize}${unit};
    height: ${dotSize}${unit};
    border-radius: 50%;
    background: ${colors.light};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: ${base}${unit};
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: ${base}${unit};
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: ${base * 4}${unit};
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: ${base * 7}${unit};
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(${base * 3}${unit}, 0);
    }
  }
`;

export default Div;