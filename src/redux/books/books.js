import { axios } from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

// ACTIONS

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

export const fetchBookAPI = () => async (dispatch) => {
  try {
    const { data } = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hp71d2oEr2DCTS2XUoVz/books');

    const books = Object.keys(data).map((key) => ({
      ...data[key][0],
      item_id: key,
    }));

    const payload = Object.values(books);
    dispatch(fetchBook(payload));
  } catch (error) {
    return error;
  }
};

// REDUCER

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== book.id);
    case FETCH_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookReducer;
