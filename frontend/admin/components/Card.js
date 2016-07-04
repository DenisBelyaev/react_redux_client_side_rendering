"use strict"

import React from 'react';
import {Link} from 'react-router';

const Card = ({books}) => {
    let list = books.map((book, index) => {
        return <Book key={index}>{book.name}</Book>
    });

    return (
        <div>
            {list}
        </div>
    )
}

module.exports = Card;