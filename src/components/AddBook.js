import React from 'react';
import { useDispatch } from 'react-redux';

import { addBook, bookId } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const submitBookToStore = () => {
    const newBook = {
      id: bookId,
      title: 'Der Schatten des Windes',
      author: 'Carlos Ruíz Zafón',
    };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Category" />
        <button type="button" onClick={submitBookToStore}>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
