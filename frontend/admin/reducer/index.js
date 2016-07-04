"use strict"

import { reducer as ReduxAsyncConnect } from 'redux-connect'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import books from './books';

const reducer = combineReducers({
    routing: routerReducer,
    ReduxAsyncConnect,
    books
})

export default reducer;