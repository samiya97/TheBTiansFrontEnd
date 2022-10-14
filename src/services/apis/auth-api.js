import ApiServices from './api-init';
import {Auth} from './endpoints';

/* *
 * These function called api 
 * */
export const login = payload => {
  return ApiServices.get(Auth.LOGIN, payload)
};