const Router = require('koa-router');
const books =  require('./routes/books');

api = new Router('/api');

api.use('/books', books.routes());

module.exports = api;