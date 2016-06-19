"use strict"

import React from 'react';
import {Link} from 'react-router';

const Menu = () => (
    <div>
        <a href="/" activeClassName="active">home</a>
        <ul>
            <li><Link to="/books" activeClassName="active">books</Link></li>
            <li><Link to="/card" activeClassName="active">card</Link></li>
        </ul>
    </div>
);

export default Menu;