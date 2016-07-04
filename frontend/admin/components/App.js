"use strict"

import React, {Component} from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
//require('es6-promise').polyfill();
//import 'isomorphic-fetch';

import { asyncConnect } from 'redux-connect'

import {bookList} from '../actions/books.js';

//asyncConnect([{
//    key: 'books',
//    promise: ({ params, helpers }) => Promise.resolve({ name: 'Borsch' })
//}])

let App = ({store, dispatch, children, books}) => (
    <div>
        <div>
            <Menu />
        </div>
        <div>
            {children}
        </div>
    </div>
);

module.exports = connect()(App);