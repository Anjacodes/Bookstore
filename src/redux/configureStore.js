import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; /* eslint-disable-line */

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
