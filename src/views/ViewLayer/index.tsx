import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RouterView from '../../router';
import { default as routerConfig } from '../../router/config';
import { default as config } from '../../assets/config';
import DotBackground from '../../components/DotBackground';
import { useSelector, useDispatch } from 'react-redux';
import { initalBackgroundColor, modifyBackgroundColor } from '../../store/action';
import { getHerosNumber, getColor } from '../method';
import type { StateType } from '../../store/reducer/type';

function ViewLayer() {
  const backgroundColor = useSelector((state: StateType) => state.backgroundColor);
  const dispatch = useDispatch();
  const location = useLocation();
  const { routes } = routerConfig;
  const backgroundStyle = `
  padding: 3%; 
  min-width: 300px;
  `
  
  useEffect(() => {
    const { colors } = config;
    const herosId = getHerosNumber(location.pathname);
    if(herosId){
      const color = getColor(herosId, colors.item);
      dispatch(modifyBackgroundColor(color));
      return;
    }
    dispatch(initalBackgroundColor(colors.main));
  }, [dispatch, initalBackgroundColor, modifyBackgroundColor, location.pathname]);

  return (
    <DotBackground fullVersion color={backgroundColor} styles={backgroundStyle}>
      <RouterView routes={routes} />
    </DotBackground>
  );
}

export default ViewLayer;