import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'services/slices/authSlice';

const appReducers = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    return appReducers(undefined, action);
  }
  return appReducers(state, action);
};

export default rootReducer;
