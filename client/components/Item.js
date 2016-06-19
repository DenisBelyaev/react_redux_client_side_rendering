"use strict"

import React, { Component } from 'react';
import {lookupMenuItem} from '../libs/data';

const Item = ({ params: { status, item } }) => {
    const menuItem = lookupMenuItem(status, item)

    return (
        <div>
            <h1>{menuItem.name}</h1>
            <p>${menuItem.desc}</p>
        </div>
    )
};

module.exports = Item;