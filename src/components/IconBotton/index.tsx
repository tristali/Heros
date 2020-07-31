import React from 'react';
import Button from '../Button';
import type { IconBottonType } from '../Button';

function IconBotton(props: IconBottonType) {
  const { onClick } = props;
  return (
    <Button onClick={onClick} isIcon borderWidth='1px' {...props} />
  );
}

export default IconBotton;