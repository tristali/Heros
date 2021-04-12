import type { BackgroundColorType } from '../components/DotBackground';
import type { ProfileType, RemainderType, IsProfileLoadingType } from './reducer/type';

const MODIFY_BGC = 'MODIFY_BGC';
const INITIAL_BGC = 'INITIAL_BGC';
const MODIFY_PROFILE = 'MODIFY_PROFILE';
const INITIAL_PROFILE = 'INITIAL_PROFILE';
const MODIFY_REMAINDER = 'MODIFY_REMAINDER';
const INITIAL_REMAINDER = 'INITIAL_REMAINDER';
const MODIFY_PROFILE_LOADING = 'MODIFY_PROFILE_LOADING';

function modifyBackgroundColor(newBackgroundColor: BackgroundColorType) {
  return {
    type: MODIFY_BGC,
    payload: newBackgroundColor,
  };
}

function initialBackgroundColor(backgroundColor: BackgroundColorType) {
  return {
    type: INITIAL_BGC,
    payload: backgroundColor,
  };
}

function modifyProfile(newProfile: ProfileType) {
  return {
    type: MODIFY_PROFILE,
    payload: newProfile,
  };
}

function initialProfile(profile: ProfileType) {
  return {
    type: INITIAL_PROFILE,
    payload: profile,
  };
}

function modifyRemainder(newRemainder: RemainderType) {
  return {
    type: MODIFY_REMAINDER,
    payload: newRemainder,
  };
}

function initialRemainder() {
  return {
    type: INITIAL_REMAINDER,
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
  INITIAL_BGC, 
  initialBackgroundColor, 
  MODIFY_PROFILE, 
  modifyProfile, 
  INITIAL_PROFILE, 
  initialProfile,
  MODIFY_REMAINDER,
  modifyRemainder,
  INITIAL_REMAINDER,
  initialRemainder,
  MODIFY_PROFILE_LOADING,
  modifyProfileLoading,
};