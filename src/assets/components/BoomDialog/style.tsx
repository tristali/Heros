import styled from 'styled-components';

const Span = styled.div`
  > svg {
    max-width: 520px;
  }
  ${props => {
    const { styles } = props.theme;
    return styles;
  }}
`;

export default Span;