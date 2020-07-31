import {
  MODIFY_BGC,
  INITAL_BGC,
  MODIFY_PROFILE,
  INITAL_PROFILE,
  MODIFY_REMAINDER,
  INITAL_REMAINDER,
  MODIFY_PROFILE_LOADING,
} from '../action';
import type { BackgroundColorType } from '../../components/DotBackground';

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
};

interface ModifyBGCInterface {
  type: typeof MODIFY_BGC;
  payload: BackgroundColorType;
}

interface InitalBGCInterface {
  type: typeof INITAL_BGC;
  payload: BackgroundColorType;
}

interface ModifyProfileInterface {
  type: typeof MODIFY_PROFILE;
  payload: ProfileType;
}

interface InitalProfileInterface {
  type: typeof INITAL_PROFILE;
  payload: ProfileType;
}

interface ModifyRemainderInterface {
  type: typeof MODIFY_REMAINDER;
  payload: RemainderType;
}

interface InitalRemainderInterface {
  type: typeof INITAL_REMAINDER;
  payload: RemainderType;
}

interface ModifyProfileLoadingInterface {
  type: typeof MODIFY_PROFILE_LOADING;
  payload: IsProfileLoadingType;
}

export type {
  StateType,
  ProfileType,
  RemainderType,
  IsProfileLoadingType,
  ProfilePropsKeyType,
  ModifyBGCInterface,
  InitalBGCInterface,
  ModifyProfileInterface,
  InitalProfileInterface,
  ModifyRemainderInterface,
  InitalRemainderInterface,
  ModifyProfileLoadingInterface,
};