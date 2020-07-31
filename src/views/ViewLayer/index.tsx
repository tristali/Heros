import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RouterView from '../../router';
import { default as routerConfig } from '../../router/config';
import { default as cssConfig } from '../../assets/config';
import DotBackground from '../../components/DotBackground';
import { useSelector, useDispatch } from 'react-redux';
import { initalBackgroundColor } from '../../store/action';
import type { StateType } from '../../store/reducer/type';

function ViewLayer() {
  const backgroundColor = useSelector((state: StateType) => state.backgroundColor);
  const dispatch = useDispatch();
  const location = useLocation();
  const { routes } = routerConfig;
  const { colors } = cssConfig;
  const backgroundStyle = `
    padding: 3%; 
    min-width: 300px;
  `

  useEffect(() => {
    dispatch(initalBackgroundColor(colors.main));
  }, [dispatch, initalBackgroundColor, location.pathname]);

  return (
    <DotBackground fullVersion color={backgroundColor} styles={backgroundStyle}>
      <RouterView routes={routes} />
    </DotBackground>
  );
}

export default ViewLayer;