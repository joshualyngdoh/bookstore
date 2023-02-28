import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'bookstore/books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
