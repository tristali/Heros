import React from 'react';
import { Link } from 'react-router-dom';
import BorderText from '../../../../../components/BorderText';
import Avatar from '../../../../../components/Avatar';
import DotBackground from '../../../../../components/DotBackground';
import config from '../../../../../assets/config';
import { useSelector } from 'react-redux';
import { getColor } from '../../../method';
import type { StateType } from '../../../../../store/reducer/type';

function Card(props: { 
  id : string; 
  name: string; 
  image: string
}) {
  const { id, name, image } = props;
  const backgroundColor = useSelector((state: StateType) => state.backgroundColor);
  const { borderRadius, colors, hoverShadow, screenSize } = config;
  const color = getColor(id, colors.item);
  const isCurrentProfile = color.toString() === backgroundColor.toString();
  const getStyleBorder = isCurrentProfile ? '' : `border: solid 3px ${colors.dark};`;
  const styles = `
    ${getStyleBorder} 
    border-radius: ${borderRadius.medium};
    width: 24%;
    margin: 0.5%;
    ${hoverShadow};
    @media (max-width: ${screenSize.tablet}) {
      width: 49%;
    };
  `;

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