import { setFetch } from '../method';
import { ProfileType } from '../../store/reducer/type';

const url = '/heroes';
const getProfileUrl = (parameter: string) => `${url}/${parameter}/profile`;

const fetchList = () => {
  return setFetch('GET', url).then(res => res.json());
};

const fetchProfile = (parameter: string) => {
  return setFetch('GET', getProfileUrl(parameter)).then(res => res.json());
};

const editProfile = (parameter: string, data: ProfileType) => {
  return setFetch('PATCH', getProfileUrl(parameter), data);
};

export { fetchList, fetchProfile, editProfile };