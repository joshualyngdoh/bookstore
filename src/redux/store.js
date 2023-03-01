import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

function configureAppStore() {
  const store = configureStore({
    reducer: {
      books: bookReducer,
      categories: categoryReducer,
    },
    middleware: [thunk],
  });

  return store;
}

export default configureAppStore();
