import { MODIFY_BGC, INITAL_BGC } from './action';
import { backgroundColor } from '../components/DotBackground';

const reducer = (state={}, action: {
  type: string;
  payload: backgroundColor;
}) => {
  switch (action.type) {
    case MODIFY_BGC:
      console.log('MODIFY')
      return {
        ...state,
        backgroundColor: action.payload,
      };

    case INITAL_BGC:
      console.log('INITAL')
      return {
        ...state,
        backgroundColor: action.payload,
      };

    default:
      console.log('default')
      return { ...state };
  }
}

export default reducer;