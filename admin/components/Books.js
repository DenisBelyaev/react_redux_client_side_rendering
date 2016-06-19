"use strict"

import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const Books = ({books}) => {
    let listBooks = books.map((book, index) => {
        return <Book key={index}>{book.name}</Book>
    })

    return (
        <div>
            {listBooks}
        </div>
    )
}

module.exports = (connect(
    state => {
        return { books: state.books }
    },
)(Books));