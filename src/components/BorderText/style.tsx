import styled from 'styled-components';

/** text-shadow setting */
const multiply = (x: number, y: number):string => {
  return (x * y).toString()
}

const textShadowRef = [[-1,-1,0],[1,-1,0],[-1,1,0],[1,1,0],[2,2,2]];

const setShadowProps = (props:{
  shadowPropsRef: number[];
  borderWidth: number;
  borderColor: string;
}) => {
  const { shadowPropsRef, borderWidth, borderColor } = props
  const getThisProp = shadowPropsRef.map((number) => {
    return `${multiply(number, borderWidth)}px`
  });
  getThisProp.push(borderColor);
  return getThisProp.join(' ');
}

const setTextShadow = (props: { 
  borderWidth: number; 
  borderColor: string
}) => {
  const { borderWidth, borderColor } = props;
  const textShadowProps = textShadowRef.map((item)=>{
    return setShadowProps({ shadowPropsRef: item, borderWidth, borderColor});
  });
  return textShadowProps.join(', ');
}

/** ====  text-shadow setting end ==== */

const Div = styled.div`
  word-break: break-all;
  ${(props) => {
    const { color, borderColor, borderWidth, styles } = props.theme;
    const divStyles = [];
    divStyles.push(`color: ${color};`);
    divStyles.push(
      `text-shadow: ${setTextShadow({ borderWidth, borderColor })};`
    );
    if (styles) {
      divStyles.push(styles);
    }
    return divStyles.join(' ');
  }}
`;

export default Div;