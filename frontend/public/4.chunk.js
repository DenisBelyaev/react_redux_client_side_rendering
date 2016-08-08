webpackJsonp([4,6],{

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(189);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Card = function Card(_ref) {
	    var books = _ref.books;

	    var list = books.map(function (book, index) {
	        return _react2.default.createElement(
	            Book,
	            { key: index },
	            book.name
	        );
	    });

	    return _react2.default.createElement(
	        'div',
	        null,
	        list
	    );
	};

	module.exports = Card;

/***/ }

});