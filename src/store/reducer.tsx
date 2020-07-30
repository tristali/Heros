import { MODIFY_BGC, INITAL_BGC } from './action';
import type { backgroundColor } from '../components/DotBackground';
import config from '../assets/config';
const { colors } = config;

type state = {
  backgroundColor: backgroundColor
}

const initalState = {
  backgroundColor: colors.main
};

const reducer = (state: state = initalState, action: {
  type: string;
  payload: backgroundColor;
}) => {
  switch (action.type) {
    case MODIFY_BGC:
      return {
        ...state,
        backgroundColor: action.payload,
      };

    case INITAL_BGC:
      return {
        ...state,
        backgroundColor: action.payload,
      };

    default:
      return { ...state };
  }
}

export default reducer;
export type { state };