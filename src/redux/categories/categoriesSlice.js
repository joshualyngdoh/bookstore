import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categorySlice = createSlice({
  name: 'bookstore/categories',
  initialState,
  reducers: {
    checkStatus: () => 'under construction',
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
