import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const GET_BOOKS = 'GET_BOOKS';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Hh517pOPUdJbRWvGSr6d/books/';

export const getAllBooks = createAsyncThunk(GET_BOOKS, async (_, { dispatch }) => {
  const response = await fetch(url);
  const data = await response.json();
  const books = Object.keys(data).map((id) => ({ ...data[id][0], item_id: id }));
  dispatch({ type: GET_BOOKS, payload: books });
});

export const addBook = createAsyncThunk(ADD, async (book, { dispatch }) => {
  await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(book) });
  dispatch({ type: ADD, payload: book });
});

export const removeBook = createAsyncThunk(REMOVE, async (id, { dispatch }) => {
  await fetch(`${url}/${id}`, { method: 'DELETE' });
  dispatch({ type: REMOVE, payload: id });
});

export default function bookReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return payload;
    case ADD:
      return [...state, payload];
    case REMOVE:
      return state.filter((book) => book.item_id !== payload);
    default:
      return state;
  }
}
