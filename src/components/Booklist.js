import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, bookId } from '../redux/books/books';
import styles from './Booklist.module.css';

function Booklist() {
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBook({
      id: bookId,
      title: 'Der Schatten des Windes',
      author: 'Carlos Ruíz Zafón',
    }));
  };

  return (
    <div className={styles.bookContainer}>
      <button type="button" onClick={removeBookFromStore}>Remove</button>
    </div>
  );
}

export default Booklist;
