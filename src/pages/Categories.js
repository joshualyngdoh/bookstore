import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.categories);

  function showStatus() {
    dispatch(checkStatus());
  }

  return (
    <div>
      <h4>{currentStatus}</h4>
      <button type="button" onClick={showStatus}>Check Status</button>
    </div>
  );
}

export default Categories;
