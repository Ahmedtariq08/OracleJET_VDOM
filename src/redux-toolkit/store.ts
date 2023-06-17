import { configureStore } from '@reduxjs/toolkit';

import loginReducer from "./reducer/login";


// Automatically adds the thunk middleware and the Redux DevTools extension
export const Store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    login: loginReducer,
  }
});