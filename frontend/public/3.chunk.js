webpackJsonp([3,6],{

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

/***/ }

});