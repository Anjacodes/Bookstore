import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

// ACTIONS

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const fetchBooksFromAPI = () => (dispatch) => {
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hp71d2oEr2DCTS2XUoVz/books')
    .then((response) => { dispatch(fetchBooks(response.data)); });
};

export const removeBookFromAPI = (id) => async (dispatch) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hp71d2oEr2DCTS2XUoVz/books/${id}`)
    .then(() => {
      dispatch(removeBook(id));
    });
};

export const addBookToAPI = (payload) => (dispatch) => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hp71d2oEr2DCTS2XUoVz/books', payload)
    .then(() => {
      dispatch(addBook(payload));
    });
};

// REDUCER

const booksReducer = (state = [], action) => {
  let booksList = [...state];
  switch (action.type) {
    case ADD_BOOK:
      booksList.push(action.payload);
      return booksList;
    case REMOVE_BOOK:
      booksList = booksList.filter((book) => book.item_id !== action.payload);
      return booksList;
    case FETCH_BOOKS:
      const fetchBooks = Object.keys(action.payload).map((key) => ({ ...action.payload[key][0], item_id: key })); /*eslint-disable-line */
      booksList = [...booksList, ...fetchBooks];
      return booksList;
    default:
      return state;
  }
};

export default booksReducer;
