var Router = require('koa-router');
var Book = require('../models/Book');

var router = new Router({prefix: 'books'});

router
    .param('bookById', function*(id, next) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            this.throw(404);
        }

        this.userById = yield Book.findById(id);

        if (!this.userById) {
            this.throw(404);
        }

        yield* next;
    })
    .post('/', function*(next) {
        var user = yield Book.create({
            name: this.request.body.name
        });

        this.body = user.toObject();
    })
    .get('/:bookById', function*(next) {
        this.body = this.bookById.toObject();
    })
    .del('/:bookById', function*(next) {
        yield this.bookById.remove({});
        this.body = 'ok';
    })
    .get('/', function*(next) {
        console.log('----------------------------');
        var books = yield Book.find({}).lean();

        this.body = books;
    });

module.exports = router;