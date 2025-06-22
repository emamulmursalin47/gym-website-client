// src/store/api/baseApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    // Get token from auth state
    // const token = (getState() as RootState).auth.token;
    
    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`);
    // }
    
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

// Base query with automatic token refresh
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  
  if (result?.error?.status === 401) {
    // Token expired - you might want to implement refresh token logic here
    // For now, we'll just clear the auth state
    api.dispatch({ type: 'auth/logout' });
  }
  
  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Class', 'User', 'Enrollment'],
  endpoints: () => ({}),
});