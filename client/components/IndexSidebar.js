"use strict"

import React, { Component } from 'react';
import {Link} from 'react-router';
import {getAll} from '../libs/data';

const IndexSidebar = () => (
    <div>
        <h2>Managers</h2>
        <ul>
            {getAll().map((manager, index) => (
                <li key={manager.status}>
                    <Link to={`/manager/${manager.status}`}> { manager.status } </Link>
                </li>
            ))}
        </ul>
    </div>
)

module.exports = IndexSidebar;