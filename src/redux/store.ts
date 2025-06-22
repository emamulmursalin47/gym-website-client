// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { classApi } from './api/classApi';

import authSlice from './slices/authSlice';
import { authApi } from './api/authApi';
import classSlice from './slices/classSlice';


export const store = configureStore({
  reducer: {
    // API slices
    [classApi.reducerPath]: classApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    
    // Regular slices
    auth: authSlice,
    classes: classSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }).concat(
      classApi.middleware,
      authApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;