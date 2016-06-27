webpackJsonp([9,11],{

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(189);

	var _data = __webpack_require__(637);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ManagerSidebar = function ManagerSidebar(_ref) {
	    var status = _ref.params.status;
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'h2',
	            null,
	            status
	        ),
	        _react2.default.createElement(
	            'ul',
	            null,
	            (0, _data.lookupManager)(status).menuItems.map(function (menuItem, index) {
	                return _react2.default.createElement(
	                    'li',
	                    { key: index },
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/manager/' + status + '/' + menuItem.name },
	                        ' ',
	                        menuItem.name,
	                        ' '
	                    )
	                );
	            })
	        )
	    );
	};

	module.exports = ManagerSidebar;

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Manager = function Manager(_ref) {
	    var children = _ref.children;
	    var params = _ref.params;
	    return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	            "h1",
	            null,
	            "Content"
	        ),
	        _react2.default.createElement(
	            "div",
	            null,
	            "Hello ",
	            params.status
	        ),
	        _react2.default.createElement(
	            "div",
	            null,
	            children
	        )
	    );
	};

	module.exports = Manager;

/***/ }

});