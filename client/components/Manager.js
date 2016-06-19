"use strict"

import React, { Component } from 'react'

const Manager = ({ children, params }) => (
    <div>
        <h1>Content</h1>
        <div>
            Hello {params.status}
        </div>
        <div>
            {children}
        </div>
    </div>
)

module.exports = Manager;