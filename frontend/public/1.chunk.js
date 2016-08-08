webpackJsonp([1,3,6],{

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getPrototypeOf = __webpack_require__(390);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(370);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(393);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(371);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(372);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(37);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(180);

	var _Book = __webpack_require__(397);

	var _Book2 = _interopRequireDefault(_Book);

	var _books = __webpack_require__(379);

	var _AddBookForm = __webpack_require__(398);

	var _AddBookForm2 = _interopRequireDefault(_AddBookForm);

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

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
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
	                                var remove = function remove() {
	                                    _this2.props.dispatch((0, _books.removeBook)(book._id));
	                                };

	                                return _react2.default.createElement(_Book2.default, { key: index, book: book, remove: remove });
	                            })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(_AddBookForm2.default, null)
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

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(189);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//stateless function components
	var Book = function Book(_ref) {
	    var book = _ref.book;
	    var remove = _ref.remove;


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
	        ),
	        _react2.default.createElement(
	            'td',
	            null,
	            _react2.default.createElement('input', { type: 'button', value: 'remove', onClick: remove })
	        )
	    );
	};

	module.exports = Book;

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(259);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(390);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(370);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(393);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(371);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(372);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(399);

	var _books = __webpack_require__(379);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var submit = function submit(values, dispatch) {
	    console.log(values);
	};

	var ContactForm = function (_Component) {
	    (0, _inherits3.default)(ContactForm, _Component);

	    function ContactForm() {
	        (0, _classCallCheck3.default)(this, ContactForm);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ContactForm).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ContactForm, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var name = _props$fields.name;
	            var description = _props$fields.description;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'form',
	                { onSubmit: handleSubmit(function (book, dispatch) {
	                        //            console.log(book);
	                        return dispatch((0, _books.addBook)(book));
	                    }) },
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'label',
	                        null,
	                        'name'
	                    ),
	                    _react2.default.createElement('input', (0, _extends3.default)({ type: 'text', placeholder: 'name' }, name))
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'label',
	                        null,
	                        'description'
	                    ),
	                    _react2.default.createElement('input', (0, _extends3.default)({ type: 'text', placeholder: 'descriptione' }, description))
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { type: 'submit' },
	                    'Submit'
	                )
	            );
	        }
	    }]);
	    return ContactForm;
	}(_react.Component);

	ContactForm = (0, _reduxForm.reduxForm)({ // <----- THIS IS THE IMPORTANT PART!
	    form: 'contact', // a unique name for this form
	    fields: ['name', 'description'] })(ContactForm);

	exports.default = ContactForm;

/***/ }

});