import styled from 'styled-components';
import config from '../../../../../assets/config';

const { fonts } = config;

const CaptionSpan = styled.span`
  font-family: ${fonts.family[1]};
  font-weight: ${fonts.weights.normal};
  width: 40%;
`;
const NumberSpan = styled.span`
  width: 60%;
  h3{
    line-height: 1em;
  }
`;

export { CaptionSpan, NumberSpan };