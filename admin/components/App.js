"use strict"

import React, {Component} from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import { getBooks } from '../actions';
import { createAction } from 'redux-actions';
import fetch from 'isomorphic-fetch';

const addBook = createAction('ADD_BOOK');

const getBookList = createAction('GET_BOOK_LIST', async () => {
    const result = await fetch('//127.0.0.1:3000/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    //console.log(result);
    return result;
});


const App = ({store, dispatch, children}) => (
    <div>
        <div>
            <Menu />
            <button onClick={() => dispatch(getBookList())}>dispatch</button>
        </div>
        <div>
            {children}
        </div>
    </div>
);

module.exports = connect()(App);