import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  ${props => {
    const { styles } = props.theme;
    return styles;
  }}
`;

export default Div;