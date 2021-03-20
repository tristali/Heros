import {
  MODIFY_BGC,
  INITIAL_BGC,
  MODIFY_PROFILE,
  INITIAL_PROFILE,
  MODIFY_REMAINDER,
  INITIAL_REMAINDER,
  MODIFY_PROFILE_LOADING,
} from '../action';
import config from '../../assets/config';
import type {
  StateType,
  ModifyBGCInterface,
  InitialBGCInterface,
  ModifyProfileInterface,
  InitialProfileInterface,
  ModifyRemainderInterface,
  InitialRemainderInterface,
  ModifyProfileLoadingInterface,
} from './type';

const { colors } = config;

const initialState = {
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

const reducer = (
  state: StateType & any = initialState,
  action:
    | ModifyBGCInterface
    | InitialBGCInterface
    | ModifyProfileInterface
    | InitialProfileInterface
    | ModifyRemainderInterface
    | InitialRemainderInterface
    | ModifyProfileLoadingInterface
) => {
  switch (action.type) {
    case MODIFY_BGC:
      return {
        ...state,
        backgroundColor: action.payload,
      };

    case INITIAL_BGC:
      return {
        ...state,
        backgroundColor: action.payload,
      };

    case MODIFY_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case INITIAL_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case MODIFY_REMAINDER:
      return {
        ...state,
        remainder: action.payload,
      };

    case INITIAL_REMAINDER:
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
};

export default reducer;