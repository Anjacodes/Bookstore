const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

const nextBook = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

export const bookId = nextBook(initialState);

// ACTIONS

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      console.log(nextBook(state));
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== bookId);
    default:
      return state;
  }
};

export default reducer;
