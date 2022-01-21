import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
  error: 'null',
  books: [],
};

export const fetchBooksfromAPI = createAsyncThunk('books/fetchBooksfromAPI', async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hp71d2oEr2DCTS2XUoVz/books');
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});

export const deleteBookFromAPI = createAsyncThunk('books/deleteBookFromAPI', async (dispatch) => {
  try {
    const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hp71d2oEr2DCTS2XUoVz/books/${id}`);
    console.log(response);
    dispatch(removeBook(id));
  } catch (error) {
    throw Error(error);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = action.payload;
    },
    removeBook: (state, action) => {
      console.log(state);
      state.books.filter((book) => book.title !== action.payload.title);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksfromAPI.pending, (state) => ({
        status: 'loading',
        books: state.books,
      }))
      .addCase(fetchBooksfromAPI.fulfilled, (state, action) => ({
        status: 'completed',
        books: action.payload,
      }))
      .addCase(fetchBooksfromAPI.rejected, (state, action) => ({
        status: 'rejected',
        error: action.error.message,
      }))
      .addCase(deleteBookFromAPI.pending, (state) => ({
        status: 'loading',
        books: state.books,
      }))
      .addCase(deleteBookFromAPI.fulfilled, (state, action) => ({
        status: 'completed',
        books: action.payload,
      }))
      .addCase(deleteBookFromAPI.rejected, (state, action) => ({
        status: 'rejected',
        error: action.error.message,
      }));
  },
});

export const allBooks = (state) => state.book.books;

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
