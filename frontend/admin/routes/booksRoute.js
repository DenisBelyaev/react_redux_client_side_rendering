"use strict"

module.exports = {
    path: 'books',

    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../components/Books'))
        })
    },

    getChildRoutes(location, callback) {
        require.ensure([], function (require) {
            callback(null, [require('./bookRoute')])
        })
    }
}