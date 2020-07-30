import styled from 'styled-components';
import config from '../../../assets/config';

const { screenSize } = config;

const Div = styled.div`
  > div > a {
    display: inline-block;
    padding: 1.5vw;
    width: 100%;
  }
  ${props =>{
    const { isLoading } = props.theme;
    if (!isLoading){
      return `display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        @media (max-width: ${screenSize.tablet}) {
          grid-template-columns: 1fr 1fr;
      };`
    }
  }}
`;
export default Div;