import ApiServices from './api-init';
import {Auth} from './endpoints';

/* *
 * These function called api 
 * */
export const login = payload => {
  return ApiServices.post(Auth.LOGIN, payload)
};


export const register = payload => {
  return ApiServices.post(Auth.SIGNUP, payload)
};