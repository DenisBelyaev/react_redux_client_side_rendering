"use strict"

export default {
    component: 'div',

    //indexRoute: { component: require('../components/App') },

    childRoutes: [
        {
            path: '/',
            component: require('../components/App'),
            childRoutes: [
                require('./booksRoute'),
                require('./cardRoute')
            ]
        }
    ]
}


