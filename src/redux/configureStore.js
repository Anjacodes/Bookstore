import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from '../slices/bookSlice';

// import bookReducer from './books/books';

const reducer = combineReducers({
  book: bookReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
