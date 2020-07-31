/** Handle Media Screen */
const createMediaScreen = (props: {
  styleKey: string;
  screen: 'tablet' | 'mobile';
  styleValue: string | number;
  ref: { [key: string]: string };
}): string => {
  const {
    styleKey,
    screen,
    styleValue,
    ref,
  } = props;
  const maxWidth = ref[screen];
  return `@media (max-width: ${maxWidth}) {
    ${styleKey}: ${styleValue}
  };`;
};

const setMediaScreens = (
  styleKey: string,
  screenStyle: { [key: string]: string | number },
  ref: { [key: string]: string },
): string => {
  const screens = Object.keys(screenStyle);
  const result = screens.map((item) => {
    const props = {
      styleKey,
      screen: item as 'tablet' | 'mobile',
      styleValue: screenStyle[item],
      ref,
    };
    return createMediaScreen(props);
  });
  return result.join(' ');
};
/** ====  Handle Media Screen end ==== */

/** Handle Font Size */
const createFontSize = (props: {
  ref: {[key: string]: string};
  tag: string;
}):string => {
  const { ref, tag } = props;
  
  return `${tag}{
    font-size: ${ref[tag]};
  }`
};

const setFontSizes = (ref: { [key: string]: string }) => {
  const tags = Object.keys(ref);
  const styles = tags.map((tag) => createFontSize({ ref, tag }));
  return styles.join(' ');
}

export { setMediaScreens, setFontSizes };