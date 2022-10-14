import { createSlice } from '@reduxjs/toolkit';
import { login } from 'services/apis/auth-api';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    profile: null,
    // isAuthenticated: !!getCookie('Auth'), // Todo
    isAuthenticated: false,
    dynamicMeta: null
  },

  reducers: {
    /* *
     * @name @login
     * @description login reducer to save user data in profile state
     * */
    onLogin: (state, action) => {
        // TODO
        // setCookie('Auth', action.payload.JWT, 3);
        // storage.setItem('Profile', action.payload);
        // state.isAuthenticated = !!action.payload.JWT;
        state.isAuthenticated = true;  // just for demo
        state.profile = action.payload;
    },
    onLogout: (state, action) => {
        // TODO
        // delete ApiServices.instance.defaults.headers.common['Authorization'];
        state.isAuthenticated = false;
        state.profile = undefined;
    },
  }
});

export const { onLogin, onLogout } =
  authSlice.actions;

/*  *
 * These function called api and allows to perform async logic
 * It can be dispatched like a regular action: `dispatch(data)`
 * */
export const loginAsync = payload => async dispatch => {
  delete payload.rememberMe;
  return login(payload).then(async ({ data }) => {
    if (data?.success && data?.data?.JWT) {
      await dispatch(onLogin(data.data));
      return Promise.resolve('resolved');
    }
    return Promise.reject(data.error);
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

/* called a selector and allows to get values from the state */
export const getProfile = state => {
  return state.auth.profile;
};

export const getAuth = state => {
  return state.auth.isAuthenticated;
};


export default authSlice.reducer;
