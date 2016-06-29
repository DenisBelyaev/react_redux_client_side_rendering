var path = require('path');

module.exports = {
    root: process.cwd(),
    prefixes: {'admin':'admin', 'client':'client'},
    db: {
        name: 'reactDB'
    },
    secret: 'secret',
    server: {
        port: 8000,
    }
}