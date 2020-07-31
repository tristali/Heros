import {
  MODIFY_BGC,
  INITAL_BGC,
  MODIFY_PROFILE,
  INITAL_PROFILE,
  MODIFY_REMAINDER,
  INITAL_REMAINDER,
  MODIFY_PROFILE_LOADING,
} from '../action';
import config from '../../assets/config';
import type {
  StateType,
  ModifyBGCInterface,
  InitalBGCInterface,
  ModifyProfileInterface,
  InitalProfileInterface,
  ModifyRemainderInterface,
  InitalRemainderInterface,
  ModifyProfileLoadingInterface,
} from './type';

const { colors } = config;

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

const reducer = (
  state: StateType & any = initalState,
  action:
    | ModifyBGCInterface
    | InitalBGCInterface
    | ModifyProfileInterface
    | InitalProfileInterface
    | ModifyRemainderInterface
    | InitalRemainderInterface
    | ModifyProfileLoadingInterface
) => {
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
};

export default reducer;