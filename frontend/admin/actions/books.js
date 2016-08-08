"use strict"

import { createAction } from 'redux-actions';
var appConfig = require('webpack-config-loader!../../app-config.js');

let api = appConfig.apiBaseUrl;//TODO: add to config

//meta third parametr: (responeTypeParse = 'text') => ({typeParse: responeTypeParse})
//export const bookList = createAction('BOOK_LIST', () => fetch(`${api}/books`), (responeTypeParse = 'json') => ({typeParse: responeTypeParse}));

export const bookList = createAction('BOOK_LIST', () => fetch(`${api}/books`));

export const getBook = createAction('GET_BOOK', (id = '') => fetch(`${api}/books/${id}`));

export const addBook = createAction('ADD_BOOK', (book = {}) =>
    fetch(`${api}/books`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',//Список допустимых форматов ресурса.
                'Content-Type': 'application/json'//Формат и способ представления сущности.
            },
            body: JSON.stringify(book)
        }
    )
);

export const removeBook = createAction('REMOVE_BOOK', (id = '') => {

    console.log(id);

    return fetch(`${api}/books/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
    )
});

