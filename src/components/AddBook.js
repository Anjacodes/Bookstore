import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; /*eslint-disable-line*/

import { addBookToAPI } from '../redux/books/books';
import styles from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' && category === '') return;
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(addBookToAPI(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <div className={styles.formCont}>
      <h2 className={styles.title}>ADD NEW BOOK</h2>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.bookTitle}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.category}
          required
        />
        <button className={styles.btn} type="submit" onClick={(e) => submitBookToStore(e)}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
