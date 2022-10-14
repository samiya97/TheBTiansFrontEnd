import Axios from 'axios';
import config from 'config';
// import responseStatus from 'helpers/responseStatus';
// import { toast } from 'react-toastify';
// import { errors } from 'helpers/variables';
// import { getCookie } from 'helpers/generic.methods';

/* *
 * @name @ApiService
 * @description Default Api Service for Auth and Defaul Queries
 * */

/* General ApiServices requests and configurations */

/*  Creating Axios instance */
const instance = Axios.create({
  baseURL: config.apiUrl + config.apiVersion
});

const ApiServices = {
  instance,
  /* *
   * @name @init
   * @description init axios interceptor on entry point and set/remove auth on app load
   * */
  init() {
    instance.interceptors.request.use(config => {
    //  TODO
    //   if (!checkAuthToken()) {
    //     toast.error(errors.inValidAuthToken);
    //     globalLogout(true);
    //     return false;
    //   }
      return config;
    });

    instance.interceptors.response.use(
      (response) => {
        // Do something with response data
        return response;
      },
      (error) => {
        // TODO
        // if (error?.response?.status === responseStatus.UNAUTHORIZED) {
        //   storage.removeItem('Auth');
        //   storage.removeItem('Profile');
        // }
        return Promise.reject(error);
      }
    );

    /* Setting Auth Header */
  },

  /* General query for get request */
  query(resource, params) {
    return instance.get(resource, params).catch(error => {
      throw new Error(`${error}`);
    });
  },

  /* General get request */
  get(resource, headers) {
    return instance.get(resource, {
      headers
    });
  },

  /* Get request with params */
  getWithParams(resource, params) {
    this.setAuthHeader();
    return instance.get(resource, params).catch(error => {
    //   TODO
    //   if (error.message === 'Network Error')
        // return toast.error(errors.networkError);
      return error?.response?.data?.error;
    });
  },

  /* General post request */
  post(resource, params) {
    this.setAuthHeader();
    return instance.post(resource, params);
    // .catch(error => {
    //   // console.log(error.response, error.message);
    //   toast.error(error.message);
    //   return error.response;
    // });
  },

  /* General post request */
  postAttachements(resource, params) {
    this.setAuthHeader();
    this.setMultipartHeader();
    return instance.post(resource, params).catch(error => {
      throw new Error(`${error}`);
    });
  },

  /* General put request */
  put(resource, params) {
    this.setAuthHeader();
    return instance.put(resource, params).catch(error => {
      throw new Error(`${error}`);
    });
  },

  /* General delete request */
  delete(resource, params) {
    return instance.delete(`${resource}/${params}`).catch(error => {
      throw new Error(`${error}`);
    });
  },
  setAuthHeader() {
    // TODO
    // const auth = getCookie('Auth');
    // if (auth) {
    //   instance.defaults.headers.common['Authorization'] = `Bearer ${auth}`;
    //   instance.defaults.headers['Content-Type'] = `application/json`;
    // } else {
    //   instance.defaults.headers.common['Authorization'] = `Bearer`;
    // }
  },

  setMultipartHeader() {
    instance.defaults.headers['Content-Type'] = `multipart/form-data`;
  },

};

export default ApiServices;
