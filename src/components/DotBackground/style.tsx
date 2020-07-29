import styled from 'styled-components';

const Div = styled.div`
  ${props => {
    const { color, styles, fullVersion } = props.theme;
    const divStyles = [];
      if (styles) {
        divStyles.push(styles)
      }
      if (fullVersion){
        divStyles.push(`width: 100vw; 
                        height: 100vh;`)
      }
      if (color){
        divStyles.push(`background: radial-gradient(${color[1]} 50%, transparent 0) ${color[0]};
                        background-size: 6px 6px;`)
      }
    return divStyles.join(' ');
  }}
`;

export default Div;