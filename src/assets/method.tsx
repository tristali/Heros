import config from './config';

const createMediaScreen = (props: {
  styleKey: string;
  screen: 'tablet' | 'mobile';
  styleValue: string | number;
}): string => {
  const {
    styleKey,
    screen,
    styleValue,
  } = props;
  const maxWidth = config.screenSize[screen];
  return `@media (max-width: ${maxWidth}) {
    ${styleKey}: ${styleValue}
  };`;
};

const setMediaScreens = (
  styleKey: string,
  screenStyle: { [key: string]: string | number }
): string => {
  const screens = Object.keys(screenStyle);
  const result = screens.map((item) => {
    const props = {
      styleKey,
      screen: item as 'tablet' | 'mobile',
      styleValue: screenStyle[item],
    };
    return createMediaScreen(props);
  });
  return result.join(' ');
};

export { setMediaScreens };