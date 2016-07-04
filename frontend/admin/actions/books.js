"use strict"

import { createAction } from 'redux-actions';
var appConfig = require('webpack-config-loader!../../app-config.js');

let api = appConfig.apiBaseUrl;//TODO: add to config

//meta: (responeTypeParse = 'text') => ({typeParse: responeTypeParse})

export const bookList = createAction('BOOK_LIST', () => fetch(`${api}/books`), (responeTypeParse = 'json') => ({typeParse: responeTypeParse}));

export const getBook = createAction('GET_BOOK', (id = '') => fetch(`${api}/books/${id}`));

export const addBook = createAction('ADD_BOOK', (book = {}) =>
    fetch(`${api}/books`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: book
        }
    ));

export const removeBook = createAction('REMOVE_BOOK', (id = '') =>
    fetch(`${api}/books/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: book
            }
));

