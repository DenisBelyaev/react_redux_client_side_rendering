"use strict"

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import books from './books';

const reducer = combineReducers({
    routing: routerReducer,
    books
})

export default reducer;