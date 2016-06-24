"use strict"

import { handleActions } from 'redux-actions';

const reducer = handleActions({
    ADD_BOOK: (state, action) => (//state = books = [{}]
        [...state, action.payload]
    ),
    GET_BOOK_LIST: (state, action) => {
        console.log(action.payload);
        return action.payload;
    }
}, []);

export default reducer;
