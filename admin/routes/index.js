"use strict"

export default {
    component: 'div',
    childRoutes: [ {
        path: '/',
        component: require('../components/App'),
        childRoutes: [
            require('./booksRoute'),
            require('./cardRoute')
        ]
    } ]
}


