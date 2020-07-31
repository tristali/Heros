import React from 'react';
import Counter from '../Counter';
import Div from './style';
import type { ProfilePropsKeyType } from '../../../../../store/reducer';

type NumberType = number;

function Info(props:{
  caption: ProfilePropsKeyType;
  number: NumberType;
}) {
  const { caption } = props;
  return <Div>
    <h4>{caption.toUpperCase()}</h4>
    <Counter {...props}/>
  </Div>;
}

export default Info;
export type { NumberType };
