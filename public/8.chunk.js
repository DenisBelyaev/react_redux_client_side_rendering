webpackJsonp([8,11],{

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _data = __webpack_require__(637);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Item = function Item(_ref) {
	    var _ref$params = _ref.params;
	    var status = _ref$params.status;
	    var item = _ref$params.item;

	    var menuItem = (0, _data.lookupMenuItem)(status, item);

	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'h1',
	            null,
	            menuItem.name
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            '$',
	            menuItem.desc
	        )
	    );
	};

	module.exports = Item;

/***/ }

});