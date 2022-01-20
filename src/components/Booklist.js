import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, fetchBooksfromAPI, allBooks } from '../slices/bookSlice';
import Book from './Book';
// import styles from './Booklist.module.css';

function Booklist() {
  const dispatch = useDispatch();
  let books = useSelector(allBooks);
  console.log(books)

  useEffect(() => {
    dispatch(fetchBooksfromAPI());
  }, []);

// console.log(Object.values(books));
// const keys = Object.keys(books);
// const books2 = Object.values(keys);

// console.log(keys, books2);

books = Object.values(books);
console.log(books)

  // useEffect(() => {
  //   fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hp71d2oEr2DCTS2XUoVz/books')
  //     .then((response) => response.json())
  //     .then((books) => dispatch(booksReceived(books)));
  // }, []);

  // useEffect(() => {
  //   fetch('');
  // });

  const removeBookFromStore = () => books.map((book, i) => {
    dispatch(removeBook({
      id: Object.keys(book),
      title: book.item1[i].title,
      category: book.item1[i].category,
    }));
  });

  // return (
  //   <div>
  //     {books.map((book) => {
  //        <div key={book.item_id} className={styles.book}>
  //        <li className={styles.listEl}><h2>{book.title}</h2></li>
  //        <li className={styles.listEl}><h3>{book.category}</h3></li>
  //        <li className={styles.listEl}><button type="button" onClick={removeBookFromStore}>Remove</button></li>
  //      </div>;
  //     })}
  //   </div>
  // );

let content;
// for (const book in books) {
//   if (Object.hasOwnProperty.call(books, book)) {
//     const element = books[book];
//     <Book book={book}/>
//   }
// }
console.log(books.title)
content = books.map((book) => book.map((book2) => <Book key={Math.random()} book={book2} />))
{/* <Book key={Math.random()} book={book} />) */}
console.log(content);
  return (
    <div>
      {content}
      <button type='button' >Fetch Books</button>
    </div>
  )
  // const showBooks = () => books.map((book, i) => (
  //   <div key={Object.keys(book)[i]} className={styles.book}>
  //     <li className={styles.listEl}><h2>{book.item1[i].title}</h2></li>
  //     <li className={styles.listEl}><h3>{book.item1[i].category}</h3></li>
  //     <li className={styles.listEl}><button type="button" onClick={removeBookFromStore}>Remove</button></li>
  //   </div>
  // ));

  // return (
  //   <div className={styles.bookContainer}>
  //     {showBooks()}
  //   </div>
  // );
}

export default Booklist;
