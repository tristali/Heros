import {
  MODIFY_BGC,
  INITIAL_BGC,
  MODIFY_PROFILE,
  INITIAL_PROFILE,
  MODIFY_REMAINDER,
  INITIAL_REMAINDER,
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

interface InitialBGCInterface {
  type: typeof INITIAL_BGC;
  payload: BackgroundColorType;
}

interface ModifyProfileInterface {
  type: typeof MODIFY_PROFILE;
  payload: ProfileType;
}

interface InitialProfileInterface {
  type: typeof INITIAL_PROFILE;
  payload: ProfileType;
}

interface ModifyRemainderInterface {
  type: typeof MODIFY_REMAINDER;
  payload: RemainderType;
}

interface InitialRemainderInterface {
  type: typeof INITIAL_REMAINDER;
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
  InitialBGCInterface,
  ModifyProfileInterface,
  InitialProfileInterface,
  ModifyRemainderInterface,
  InitialRemainderInterface,
  ModifyProfileLoadingInterface,
};