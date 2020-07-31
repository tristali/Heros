import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  > div:nth-child(1) {
    max-width: 600px;
    width: 100%;
    padding-right: 1rem;
  }
`;
export default Div;