import React from 'react';
import { Link } from 'react-router-dom';
import BorderText from '../../../../../components/BorderText';
import Avatar from '../../../../../components/Avatar';
import DotBackground from '../../../../../components/DotBackground';
import config from '../../../../../assets/config';
import { useSelector } from 'react-redux';
import { getColor } from '../../../method';
import type { state } from '../../../../../store/reducer';

function Card(props: { 
  id : string; 
  name: string; 
  image: string
}) {
  const backgroundColor = useSelector((state: state) => state.backgroundColor);
  const { id, name, image } = props;
  const { borderRadius, colors } = config;
  const color = getColor(id, colors.item);
  const isCurrentProfile = color.toString() === backgroundColor.toString();
  const getStyleBorder = isCurrentProfile ? '' : `border: solid 3px ${colors.dark};`;
  const styles = `
    ${getStyleBorder} 
    border-radius: ${borderRadius.medium};
    :hover{
      box-shadow: 6px 6px 5px rgba(0,0,0,.5);
  }`;

  return (
    <DotBackground styles={styles} color={color}>
      <Link to={`/heroes/${id}`}>
        <Avatar image={image} />
        <BorderText>
          <h2>{name.toUpperCase()}</h2>
        </BorderText>
      </Link>
    </DotBackground>
  );
}

export default Card;