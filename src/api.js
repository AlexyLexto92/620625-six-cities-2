import axios from 'axios';
import {ActionCreator} from './reducer.js';

const apiUrl = `https://htmlacademy-react-2.appspot.com/six-cities`;
const apiTimeout = 5000;

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: apiUrl,
    timeout: apiTimeout,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === 401 || err.response.status === 403) {
      dispatch(ActionCreator.requireAuthorization(true));
      history.pushState({}, null, `/sign-in`);
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
