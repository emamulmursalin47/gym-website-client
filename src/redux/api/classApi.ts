// src/store/api/classApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

// Interface definitions
interface ISchedule {
  day: string;
  time: string;
}

interface ITrainer {
  _id: string;
  name: string;
  avatar?: string;
  rating?: number;
}

interface IClass {
  _id?: string;
  name: string;
  description: string;
  trainer: ITrainer | string;
  category: string;
  enrolledUsers?: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'High';
  duration: number;
  maxCapacity: number;
  currentEnrollment: number;
  schedule: ISchedule[];
  location: string;
  price: number;
  image: string;
  features: string[];
  status?: 'ACTIVE' | 'INACTIVE' | 'CANCELLED';
  createdAt?: string;
  updatedAt?: string;
}

interface ClassFilters {
  category?: string;
  difficulty?: string;
  searchTerm?: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

export const classApi = createApi({
  reducerPath: 'classApi',
  baseQuery,
  tagTypes: ['Class', 'Categories'],
  endpoints: (builder) => ({
    // Get all classes with filters
    getClasses: builder.query<ApiResponse<IClass[]>, ClassFilters | void>({
      query: (filters = {}) => {
        const params = new URLSearchParams();
        
        if (filters.category && filters.category !== 'All') {
          params.append('category', filters.category);
        }
        if (filters.difficulty && filters.difficulty !== 'All') {
          params.append('difficulty', filters.difficulty);
        }
        if (filters.searchTerm) {
          params.append('searchTerm', filters.searchTerm);
        }
        
        return {
          url: '/classes',
          params: params.toString() ? Object.fromEntries(params) : undefined,
        };
      },
      providesTags: ['Class'],
    }),

    // Get single class
    getClass: builder.query<ApiResponse<IClass>, string>({
      query: (id) => `/classes/${id}`,
      providesTags: (result, error, id) => [{ type: 'Class', id }],
    }),

    // Create new class
    createClass: builder.mutation<ApiResponse<IClass>, Partial<IClass>>({
      query: (newClass) => ({
        url: '/classes',
        method: 'POST',
        body: newClass,
      }),
      invalidatesTags: ['Class'],
    }),

    // Update class
    updateClass: builder.mutation<ApiResponse<IClass>, { id: string; data: Partial<IClass> }>({
      query: ({ id, data }) => ({
        url: `/classes/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Class', id }, 'Class'],
    }),

    // Delete class
    deleteClass: builder.mutation<ApiResponse<null>, string>({
      query: (id) => ({
        url: `/classes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Class'],
    }),

    // Get categories
    getCategories: builder.query<ApiResponse<string[]>, void>({
      query: () => '/classes/categories',
      providesTags: ['Categories'],
    }),

    // Enroll in class
    enrollInClass: builder.mutation<ApiResponse<IClass>, string>({
      query: (classId) => ({
        url: `/classes/${classId}/enroll`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, classId) => [
        { type: 'Class', id: classId },
        'Class',
      ],
    }),
  }),
});

export const {
  useGetClassesQuery,
  useGetClassQuery,
  useCreateClassMutation,
  useUpdateClassMutation,
  useDeleteClassMutation,
  useGetCategoriesQuery,
  useEnrollInClassMutation,
} = classApi;