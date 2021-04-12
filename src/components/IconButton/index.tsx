import React from 'react';
import Button from '../Button';
import type { IconButtonType } from '../Button';

function IconButton(props: IconButtonType) {
  const { onClick } = props;
  return (
    <Button onClick={onClick} isIcon borderWidth='1px' {...props} />
  );
}

export default IconButton;