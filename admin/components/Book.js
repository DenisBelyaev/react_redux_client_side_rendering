"use strict"

import React from 'react';
import {Link} from 'react-router';

const Book = ({children}) => {

    return (
        <div>
            {children}
        </div>
    )
}

module.exports = Book;