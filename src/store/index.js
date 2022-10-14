import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';

export default configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      // by default serializableCheck set to true by the getDefaultMiddleware middleware
      // which checks the data to be dispatched in serialized form
      // we set it to false as we have non serialized data
      serializableCheck: false
    })]
});
