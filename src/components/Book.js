import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ id, title, author }) {
  const dispatch = useDispatch();

  function handleRemoveClick() {
    dispatch(removeBook(id));
  }

  return (
    <div>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button type="button" onClick={handleRemoveClick}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
