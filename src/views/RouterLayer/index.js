import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from '../../router';
import { default as routerConfig } from '../../router/config';
import { default as cssConfig } from '../../assets/config';
import DotBackground from '../../components/DotBackground';
import { useSelector, useDispatch } from 'react-redux';
import { initalBackgroundColor } from '../../store/action';

function RouterLayer() {
  const backgroundColor = useSelector((state) => state.backgroundColor);
  const dispatch = useDispatch();
  const { routes } = routerConfig;
  const { colors } = cssConfig;
  const backgroundStyle = 'padding: 3%; min-width: 300px;';
  
  useEffect(()=>{
    dispatch(initalBackgroundColor(colors.main));
  }, [initalBackgroundColor, dispatch]);

  return (
    <Router>
      <DotBackground
        fullVersion
        color={backgroundColor}
        styles={backgroundStyle}
      >
        <RouterView routes={routes} />
      </DotBackground>
    </Router>
  );
}

export default RouterLayer;