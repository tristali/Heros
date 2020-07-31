import type { BackgroundColorType } from '../components/DotBackground';
import type { ProfileType, RemainderType, IsProfileLoadingType } from './reducer/type';

const MODIFY_BGC = 'MODIFY_BGC';
const INITAL_BGC = 'INITAL_BGC';
const MODIFY_PROFILE = 'MODIFY_PROFILE';
const INITAL_PROFILE = 'INITAL_PROFILE';
const MODIFY_REMAINDER = 'MODIFY_REMAINDER';
const INITAL_REMAINDER = 'INITAL_REMAINDER';
const MODIFY_PROFILE_LOADING = 'MODIFY_PROFILE_LOADING';

function modifyBackgroundColor(newBackgroundColor: BackgroundColorType) {
  return {
    type: MODIFY_BGC,
    payload: newBackgroundColor,
  };
}

function initalBackgroundColor(backgroundColor: BackgroundColorType) {
  return {
    type: INITAL_BGC,
    payload: backgroundColor,
  };
}

function modifyProfile(newProfile: ProfileType) {
  return {
    type: MODIFY_PROFILE,
    payload: newProfile,
  };
}

function initalProfile(profile: ProfileType) {
  return {
    type: INITAL_PROFILE,
    payload: profile,
  };
}

function modifyRemainder(newRemainder: RemainderType) {
  return {
    type: MODIFY_REMAINDER,
    payload: newRemainder,
  };
}

function initalRemainder() {
  return {
    type: INITAL_REMAINDER,
    payload: 0,
  };
}

function modifyProfileLoading(isLoading: IsProfileLoadingType) {
  return {
    type: MODIFY_PROFILE_LOADING,
    payload: isLoading,
  };
}

export { 
  MODIFY_BGC, 
  modifyBackgroundColor, 
  INITAL_BGC, 
  initalBackgroundColor, 
  MODIFY_PROFILE, 
  modifyProfile, 
  INITAL_PROFILE, 
  initalProfile,
  MODIFY_REMAINDER,
  modifyRemainder,
  INITAL_REMAINDER,
  initalRemainder,
  MODIFY_PROFILE_LOADING,
  modifyProfileLoading,
};
