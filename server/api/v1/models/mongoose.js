var config = require('config');
var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://172.17.0.1:27017/' + config.db.name, {
    server: {
        socketOptions: {
            keepAlive: 1
        },
        poolSize:      5
    }
});

module.exports = mongoose;
