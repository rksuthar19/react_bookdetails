import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';
import ActiveBooksReducer from './reducer_active_book';

/*.........CREATING ROOT REDUCER BY COMBINING ALL REDUCERS, IT WILL PROVIDE CORRESPONDING PROPS..........*/
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBooksReducer,
});

export default rootReducer;
