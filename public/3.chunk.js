webpackJsonp([3,11],{

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