import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksFromAPI } from '../redux/books/books';
import styles from './Booklist.module.css';
import Book from './Book';

const Booklist = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksFromAPI());
  }, []);

  const content = books.map((book) => (<Book unit={book} key={book.item_id} />));

  return (
    <div className={styles.bookContainer}>
      {content}
    </div>
  );
};

export default Booklist;
