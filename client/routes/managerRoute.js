"use strict"

module.exports = {
    path: 'manager/:status',

    getChildRoutes(location, callback) {
        require.ensure([], function (require) {
            callback(null, [
                require('./itemRoute')
            ])
        })
    },

    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, {
                sidebar: require('../components/ManagerSidebar'),
                content: require('../components/Manager')
            })
        })
    }
}