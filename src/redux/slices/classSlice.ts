// src/store/slices/classSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ClassFilters {
  searchTerm: string;
  categoryFilter: string;
  difficultyFilter: string;
}

interface ClassState {
  filters: ClassFilters;
  selectedClass: string | null;
  viewMode: 'grid' | 'list';
  sortBy: 'name' | 'price' | 'rating' | 'duration';
  sortOrder: 'asc' | 'desc';
}

const initialState: ClassState = {
  filters: {
    searchTerm: '',
    categoryFilter: 'All',
    difficultyFilter: 'All',
  },
  selectedClass: null,
  viewMode: 'grid',
  sortBy: 'name',
  sortOrder: 'asc',
};

const classSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.filters.searchTerm = action.payload;
    },
    
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.filters.categoryFilter = action.payload;
    },
    
    setDifficultyFilter: (state, action: PayloadAction<string>) => {
      state.filters.difficultyFilter = action.payload;
    },
    
    setFilters: (state, action: PayloadAction<Partial<ClassFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    
    clearFilters: (state) => {
      state.filters = {
        searchTerm: '',
        categoryFilter: 'All',
        difficultyFilter: 'All',
      };
    },
    
    setSelectedClass: (state, action: PayloadAction<string | null>) => {
      state.selectedClass = action.payload;
    },
    
    setViewMode: (state, action: PayloadAction<'grid' | 'list'>) => {
      state.viewMode = action.payload;
    },
    
    setSortBy: (state, action: PayloadAction<'name' | 'price' | 'rating' | 'duration'>) => {
      state.sortBy = action.payload;
    },
    
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },
    
    toggleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
    },
  },
});

export const {
  setSearchTerm,
  setCategoryFilter,
  setDifficultyFilter,
  setFilters,
  clearFilters,
  setSelectedClass,
  setViewMode,
  setSortBy,
  setSortOrder,
  toggleSortOrder,
} = classSlice.actions;

export default classSlice.reducer;