import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/books/books';
import styles from './Book.module.css';
import progress from '../images/progressBar.png';

const Book = (book) => {
  const { unit } = book;
  const { item_id, title, category } = unit; /*eslint-disable-line*/
  const dispatch = useDispatch();

  const deleteBookfromUI = (id) => {
    dispatch(removeBookFromAPI(id));
  };

  return (
    <div className={styles.book}>
      <div className={styles.bookInfo}>
        <h3 className={styles.category}>{category}</h3>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.btnCont}>
          <button type="button" className={styles.btn}>Comments</button>
          <span className={styles.btn}>|</span>
          <button className={styles.btn} type="button" onClick={() => deleteBookfromUI(item_id)}>Delete</button>
          <span className={styles.btn}>|</span>
          <button type="button" className={styles.btn}>Edit</button>
        </div>
      </div>
      <div className={styles.progressCont}>
        <img className={styles.progress} src={progress} alt="progress bar" />
        <div className={styles.margLeft}>
          <h3 className={styles.percentage}>40%</h3>
          <p className={styles.completed}>Completed</p>
        </div>
      </div>
      <div>
        <h4 className={styles.current}>CURRENT CHAPTER</h4>
        <h4 className={styles.chapter}>Chapter 7</h4>
        <button className={styles.btnProg} type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
