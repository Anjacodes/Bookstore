import React from 'react';
import styles from './Booklist.module.css';

function Booklist() {
  return (
    <div className={styles.bookContainer}>
      <button type="button">Remove</button>
    </div>
  );
}

export default Booklist;
