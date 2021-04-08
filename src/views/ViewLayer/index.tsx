import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RouterView from '../../router';
import { default as routerConfig } from '../../router/config';
import { default as config } from '../../assets/config';
import DotBackground from '../../components/DotBackground';
import { useSelector, useDispatch } from 'react-redux';
import { initialBackgroundColor, modifyBackgroundColor } from '../../store/action';
import { getHerosNumber, getColor } from '../method';
import type { StateType } from '../../store/reducer/type';

function ViewLayer() {
  const backgroundColor = useSelector((state: StateType) => state.backgroundColor);
  const dispatch = useDispatch();
  const location = useLocation();
  const { colors } = config;
  const heroId = getHerosNumber(location.pathname);
  const { routes } = routerConfig(heroId);
  const backgroundStyle = `
  padding: 3%; 
  min-width: 300px;
  `

  useEffect(() => {
    if(heroId){
      const color = getColor(heroId, colors.item);
      dispatch(modifyBackgroundColor(color));
      return;
    }
    dispatch(initialBackgroundColor(colors.main));
  }, [dispatch, initialBackgroundColor, modifyBackgroundColor, location.pathname]);

  return (
    <DotBackground fullVersion color={backgroundColor} styles={backgroundStyle}>
      <RouterView routes={routes} />
    </DotBackground>
  );
}

export default ViewLayer;