import styled from 'styled-components';

const Div = styled.div`
  > div > a {
    display: inline-block;
    padding: 1.5vw;
    width: 100%;
  }
  ${props =>{
    const { isLoading } = props.theme;
    if (!isLoading){
      return `display: flex;
        flex-wrap: wrap;`
    }
  }}
`;
export default Div;