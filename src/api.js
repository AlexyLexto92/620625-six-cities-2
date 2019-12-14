import axios from 'axios';
import {ActionCreator} from './reducers/dataLoad/dataLoad';

const apiUrl = `https://htmlacademy-react-2.appspot.com/six-cities`;
const apiTimeout = 5000;
const status = {
  unAuthorized: 401,
  notFound: 404,
};

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: apiUrl,
    timeout: apiTimeout,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === status.unAuthorized || err.response.status === status.notFound) {
      dispatch(ActionCreator.requireAuthorization(true));
      history.pushState({}, null, `/sign-in`);
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
