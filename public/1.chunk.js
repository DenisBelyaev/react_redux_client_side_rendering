webpackJsonp([1,3,11],{

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getPrototypeOf = __webpack_require__(386);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(369);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(389);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(370);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(371);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(37);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(180);

	var _Book = __webpack_require__(393);

	var _Book2 = _interopRequireDefault(_Book);

	var _books = __webpack_require__(378);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Books = function (_React$Component) {
	    (0, _inherits3.default)(Books, _React$Component);

	    function Books(props) {
	        (0, _classCallCheck3.default)(this, Books);

	        console.dir(props);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Books).call(this, props));
	    }

	    (0, _createClass3.default)(Books, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.props.dispatch((0, _books.bookList)());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var dispatch = this.props.dispatch.dispatch;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'table',
	                    null,
	                    _react2.default.createElement(
	                        'thead',
	                        null,
	                        _react2.default.createElement(
	                            'tr',
	                            null,
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                'name'
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                'description'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'tbody',
	                        null,
	                        this.props.books.map(function (book, index) {
	                            return _react2.default.createElement(_Book2.default, { key: index, book: book });
	                        })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'form',
	                        { ref: function ref(c) {
	                                return _this2._form = c;
	                            } },
	                        _react2.default.createElement('input', { type: 'text' }),
	                        _react2.default.createElement('input', { type: 'text' }),
	                        _react2.default.createElement(
	                            'button',
	                            { onClick: function onClick(e) {
	                                    e.preventDefault();
	                                    var content = _reactDom2.default.findDOMNode(_this2._form).elements;
	                                    console.log(content);
	                                    //dispatch(addBook(book))
	                                } },
	                            'Submit'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Books;
	}(_react2.default.Component);

	module.exports = (0, _reactRedux.connect)(function (state) {
	    return { books: state.books };
	})(Books);

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(189);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//stateless function components
	var Book = function Book(_ref) {
	    var book = _ref.book;


	    return _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	            'td',
	            null,
	            book.name
	        ),
	        _react2.default.createElement(
	            'td',
	            null,
	            book.description
	        )
	    );
	};

	module.exports = Book;

/***/ }

});