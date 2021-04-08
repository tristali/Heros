const baseURL = 'https://hahow-recruit.herokuapp.com';

const createFetch = (props: {
  method: 'GET' | 'PATCH';
  url: string;
  data?: { [key: string]: number | null | string }
}) => {
  const { method, url, data } = props;

  return fetch(url,{
    headers: {
      'content-type': 'application/json'
    },
    method,
    body: JSON.stringify(data),
  });
};

const setFetch = (
  method: 'GET' | 'PATCH',
  url: string, 
  data?: { [key: string]: number | null | string }
) => {
  if (method === 'PATCH' && data) {
    return createFetch({
      method,
      url: baseURL+url,
      data,
    });
  }
  return createFetch({
    method,
    url: baseURL+url,
  });
};

export { setFetch };