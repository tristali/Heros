import { 
  MODIFY_BGC, 
  INITAL_BGC, 
  MODIFY_PROFILE, 
  INITAL_PROFILE, 
  MODIFY_REMAINDER, 
  INITAL_REMAINDER,
  MODIFY_PROFILE_LOADING, 
} from './action';
import type { BackgroundColorType } from '../components/DotBackground';
import config from '../assets/config';
const { colors } = config;

type ProfileType = {
  str: number;
  int: number;
  agi: number;
  luk: number;
};

type ProfilePropsKeyType = 'str' | 'int' | 'agi' | 'luk';
type RemainderType = number;
type IsProfileLoadingType = boolean;

type StateType = {
  backgroundColor: BackgroundColorType;
  profile: ProfileType;
  remainder: RemainderType;
  isProfileLoading: IsProfileLoadingType;
}

const initalState = {
  backgroundColor: colors.main,
  profile: { 
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  },
  remainder: 0,
  isProfileLoading: false,
};

const reducer = (state: StateType = initalState, action: {
  type: string;
  payload: BackgroundColorType;
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

    case MODIFY_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case INITAL_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case MODIFY_REMAINDER:
      return {
        ...state,
        remainder: action.payload,
      };

    case INITAL_REMAINDER:
      return {
        ...state,
        remainder: action.payload,
      };

    case MODIFY_PROFILE_LOADING:
      return {
        ...state,
        isProfileLoading: action.payload,
      };

    default:
      return { ...state };
  }
}

export default reducer;
export type { StateType, ProfileType, RemainderType, IsProfileLoadingType, ProfilePropsKeyType };