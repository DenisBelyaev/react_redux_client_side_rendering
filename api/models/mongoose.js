var config = require('config');
var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/' + config.db.name, {
    server: {
        socketOptions: {
            keepAlive: 1
        },
        poolSize:      5
    }
});

module.exports = mongoose;
