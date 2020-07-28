import config from './config';

const createMediaScreen = (props) => {
  const { styleKey, screen, styleValue } = props;
  const maxWidth = config.screenSize[screen];
  return `@media (max-width: ${maxWidth}) {
    ${styleKey}: ${styleValue}
  };`
}

const setMediaScreens = (styleKey, screenStyle) => {
  const screens = Object.keys(screenStyle);
  const result = screens.map((item, index)=>{
    const screen = screens[index];
    const props = {
      styleKey, screen: item, styleValue: screenStyle[screen]
    }
    return createMediaScreen(props)
  });
  return result.join(' ');
}

export { setMediaScreens };