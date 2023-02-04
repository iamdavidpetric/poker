import axios from 'axios';

const api = axios.create({
  baseUrl: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PATH_PREFIX}`,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const ownInterseptors = {
  handleError: error => {
    return Promise.reject(error);
  },
  handleResponse: response => {
    return response;
  },
  handleRequest: config => {
    return config;
  },
};

api.interceptors.request.use(ownInterseptors.handleRequest, ownInterseptors.handleError);

api.interceptors.response.use(ownInterseptors.handleResponse, ownInterseptors.handleError);

const Api = {
  API_CALL: 'API_CALL',

  catchError: error => {
    return error.response.data;
  },

  delete: path => {
    const request = api.delete(path);
    request.catch.apply(Api.catchError);
    return request;
  },
  get: path => {
    const request = api.get(path);
    request.catch(Api.catchError);
    return request;
  },
  patch: (path, body) => {
    const request = api.patch(path, body);
    request.catch.apply(Api.catchError);
    return request;
  },
  post: (path, body) => {
    const request = api.post(path, body);
    request.catch(Api.catchError);
    return request;
  },
  put: (path, body) => {
    const request = api.put(path, body);
    request.catch.apply(Api.catchError);
    return request;
  },

  setHeaders: headers => {
    api.defaults.headers.common = headers;
  },
};

export default Api;
