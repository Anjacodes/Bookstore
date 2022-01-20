import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: 'idle',
  error: 'null',
  books: [],
};

export const fetchBooksfromAPI = createAsyncThunk('books/fetchBooksfromAPI', async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hp71d2oEr2DCTS2XUoVz/books')
    console.log(response.data);
    return response.data;
  }
  catch (error) {
    throw Error(error);
  }
})

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = action.payload;
    },
    removeBook: (state, action) => {
      state.books.filter((book) => book.id !== action.payload.item_id);
    }
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
    // [fetchBooksfromAPI.pending]: (state, action) => {
    //   return {...state, status: 'loading'}
    // },
    // [fetchBooksfromAPI.fulfilled]: (state, action) => {
    // //   state.book = action.payload;
    // //   state.status = 'completed';
    //   return {...state, books: action.payload, status: 'completed'}
    // },
    // [fetchBooksfromAPI.rejected]: (state, action) => {
    // //   state.error = action.error.message;
    // //   state.status = 'rejected';
    //   return {...state, error: action.error.message, status: 'rejected'}
    // }
  }
})

console.log(bookSlice);

export const allBooks = (state) => state.book.books;

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;