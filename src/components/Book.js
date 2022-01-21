import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/books/books';
import styles from './Book.module.css';

const Book = (book) => {
  const { unit } = book;
  const { item_id, title, category } = unit; /*eslint-disable-line*/
  const dispatch = useDispatch();

  const deleteBookfromUI = (id) => {
    dispatch(removeBookFromAPI(id));
  };

  return (
    <div className={styles.book}>
      <h3 className={styles.bookEl}>{title}</h3>
      <h3 className={styles.bookEl}>{category}</h3>
      <button type="button" onClick={() => deleteBookfromUI(item_id)}>Delete</button>
    </div>
  );
};

export default Book;
