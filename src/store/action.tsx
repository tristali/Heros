import { backgroundColor } from '../components/DotBackground';

const MODIFY_BGC = 'MODIFY_BGC';
const INITAL_BGC = 'INITAL_BGC';

function modifyBackgroundColor(newBackgroundColor: backgroundColor) {
  return {
    type: MODIFY_BGC,
    payload: newBackgroundColor,
  };
}

function initalBackgroundColor(backgroundColor: backgroundColor) {
  return {
    type: INITAL_BGC,
    payload: backgroundColor,
  };
}

export { MODIFY_BGC, modifyBackgroundColor, INITAL_BGC, initalBackgroundColor };
