import React from 'react';

function Form() {
  return (
    <div>
      <form>
        <input type="text" name="title" id="title" placeholder="Add Book Title" />
        <select name="author" id="author">
          <option value="Antony Doer">Antony Doer</option>
          <option value="Tomi Adeyemi">Tomi Adeyemi</option>
          <option value="jk-rowling">JK Rowling</option>
          <option value="jrr-tolkein">J.R.R Tolkein</option>
        </select>
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}

export default Form;
