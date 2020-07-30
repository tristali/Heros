import styled from 'styled-components';
import config from '../../assets/config';


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

const Div = styled.div`
  word-break: break-all;
  ${(props) => {
    const { color, borderColor, borderWidth, styles } = props.theme;
    const { fonts } = config;
    const divStyles = [];
    if (styles) {
      divStyles.push(styles);
    }
    divStyles.push(`font-weight: ${fonts.weights.bold};`);
    divStyles.push(`color: ${color};`);
    divStyles.push(
      `text-shadow: ${setTextShadow({ borderWidth, borderColor })};`
    );
    return divStyles.join(' ');
  }}
`;

export default Div;