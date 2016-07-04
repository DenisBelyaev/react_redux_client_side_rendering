const Router = require('koa-router');
const v1 =  require('./v1');
//const books =  require('./v1/routes/books');

let api = new Router({prefix: '/api'});

api.use('/v1', v1.routes());
//api.use('/books', books.routes());

module.exports = api;