import React from 'react';
import Div from './style';

function Avatar(props: { image : string}) {
  const { image } = props;
  return (
    <Div>
      <span>
        <img src={image} />
      </span>
    </Div>
  );
}

export default Avatar;