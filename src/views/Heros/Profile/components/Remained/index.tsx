import React, {Fragment} from 'react';
import { CaptionSpan, NumberSpan } from './style';
import type { NumberType } from '../Info';

function Remained(props:{
  number: NumberType
}) {
  const { number } = props;
  return (
    <Fragment>
      <CaptionSpan>剩餘點數</CaptionSpan>
      <NumberSpan><h3>{number}</h3></NumberSpan>
    </Fragment>
  );
}

export default Remained;