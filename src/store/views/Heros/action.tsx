import { setAxios } from '../../method';

const url = '/heroes';
const getProfileUrl = (parameter: string) => `${url}/${parameter}/profile`;

const fetchList = () => {
  return setAxios('get', url);
};

const fetchProfile = (parameter: string) => {
  return setAxios('get', getProfileUrl(parameter));
};

const editProfile = (parameter: string, data: {[key: string]: number}) => {
  return setAxios('get', getProfileUrl(parameter), data);
};

export { fetchList, fetchProfile, editProfile };