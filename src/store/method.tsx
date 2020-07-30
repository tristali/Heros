import { default as OriginAxios } from 'axios';

const baseURL = 'https://hahow-recruit.herokuapp.com';

const createAxios = (props: {
  method: 'get' | 'patch';
  baseURL: string;
  url: string;
  data? : {[key: string]: number}
}) => {
  const argument = {'Content-Type': 'application/json', ... props};
  return OriginAxios(argument);
};

const setAxios = (
  method: 'get' | 'patch',
  url: string, 
  data?: { [key: string]: number }
) => {
  if (method === 'patch' && data) {
    return createAxios({
      method,
      baseURL,
      url,
      data,
    });
  }
  return createAxios({
    method,
    baseURL,
    url,
  });
};

export { setAxios };