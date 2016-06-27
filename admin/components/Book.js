"use strict"

import React from 'react';
import {Link} from 'react-router';

const Book = ({book}) => {

    return (
        <tr>
            <td>{book.name}</td>
            <td>{book.description}</td>
        </tr>
    )
}

module.exports = Book;