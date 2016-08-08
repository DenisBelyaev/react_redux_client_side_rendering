"use strict"

import React from 'react';
import {Link} from 'react-router';

//stateless function components
const Book = ({book, remove}) => {

    return (
        <tr>
            <td>{book.name}</td>
            <td>{book.description}</td>
            <td><input type="button" value="remove" onClick={remove}/></td>
        </tr>
    )
}

module.exports = Book;