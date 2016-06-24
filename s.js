var koa = require('koa');
var app = koa();
var config = require('config');
var path = require('path');
var fs = require('fs');
var rewrite = require('koa-rewrite');

var config = require('config');

app.keys = [config.secret];


//var middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();
//
//middlewares.forEach(function(middleware) {
//    app.use(require('./middlewares/' + middleware));
//});

var Book = require('./api/models/Book');
app.use(function* () {
    var books = yield Book.find({}).lean();

    console.log(books);
});

app.listen(3001, function(err) {
    console.log('server listen: ' + config.server.apiPort);
});
