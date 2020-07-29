import { createGlobalStyle } from "styled-components";
import config from '../config';
import { setMediaScreens, setFontSizes } from '../method';

const { fonts } = config;
const { family, sizes, weights, lineHeight, letterSpacing } = fonts;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${sizes.root.large};
    ${setMediaScreens('font-size', {
      tablet: sizes.root.medium,
      mobile: sizes.root.small,
    }, config.screenSize)}
    font-family: ${family.join(', ')};
    font-weight: ${weights.normal};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
    text-align: center;
  }
  ${setFontSizes(sizes.tag)}
  `;

export default GlobalStyle;