"use strict"

import React from 'react';
import {Link} from 'react-router';
//import '../styles';


const Menu = () => (
    <div>
        <a href="/" >home</a>
        <ul>
            <li><Link to="/books" >books</Link></li>
            <li><Link to="/card" >card</Link></li>
        </ul>
    </div>
);

export default Menu;