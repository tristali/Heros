import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RouterView from '../../router';
import { default as routerConfig } from '../../router/config';
import { default as cssConfig } from '../../assets/config';
import DotBackground from '../../components/DotBackground';
import { useSelector, useDispatch } from 'react-redux';
import { initalBackgroundColor } from '../../store/action';
import type { state } from '../../store/reducer';

function ViewLayer() {
  const backgroundColor = useSelector((state: state) => state.backgroundColor);
  const dispatch = useDispatch();
  const location = useLocation();
  const { routes } = routerConfig;
  const { colors } = cssConfig;
  const backgroundStyle = `
    padding: 3%; 
    min-width: 300px; 
    max-width: 1200px;
    margin: 0 auto;`

  useEffect(() => {
    dispatch(initalBackgroundColor(colors.main));
  }, [initalBackgroundColor, dispatch, location.pathname]);

  return (
    <DotBackground fullVersion color={backgroundColor} styles={backgroundStyle}>
      <RouterView routes={routes} />
    </DotBackground>
  );
}

export default ViewLayer;