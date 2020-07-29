import React from 'react';
import { ReactComponent as BoomDialogImg } from '../../img/boomDialog.svg'
import Span from './style';

function BoomDialog(props:{
  style?: string
}) {
  return (
    <Span theme={ props }>
      <BoomDialogImg />
    </Span>
  );
}

export default BoomDialog;