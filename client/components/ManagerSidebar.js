"use strict"

import React, { Component } from 'react';
import {Link} from 'react-router';
import {lookupManager} from '../libs/data';


const ManagerSidebar = ({ params: {status} }) => (
    <div>
        <h2>{ status }</h2>
        <ul>
            {lookupManager(status).menuItems.map((menuItem, index) => (
                <li key={index}>
                    <Link to={`/manager/${status}/${menuItem.name}`}> { menuItem.name } </Link>
                </li>
            ))}
        </ul>
    </div>
)

module.exports = ManagerSidebar;