import { setAxios } from '../method';
import { ProfileType } from '../../store/reducer/type';

const url = '/heroes';
const getProfileUrl = (parameter: string) => `${url}/${parameter}/profile`;

const fetchList = () => {
  return setAxios('get', url);
};

const fetchProfile = (parameter: string) => {
  return setAxios('get', getProfileUrl(parameter));
};

const editProfile = (parameter: string, data: ProfileType) => {
  return setAxios('patch', getProfileUrl(parameter), data);
};

export { fetchList, fetchProfile, editProfile };