"use strict"

module.exports = {
    path: 'card',

    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../components/Card'))
        })
    }
}