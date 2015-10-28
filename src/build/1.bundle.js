webpackJsonp([1],{

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = angular.module('home', [__webpack_require__(15).name, __webpack_require__(16).name]);
	module.exports = exports['default'];

/***/ },

/***/ 15:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var HomeController = function HomeController() {
	  _classCallCheck(this, HomeController);
	};

	exports['default'] = angular.module('home.controller', []).controller('HomeController', HomeController);
	module.exports = exports['default'];

/***/ },

/***/ 16:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var HomeAboutController = function HomeAboutController() {
	  _classCallCheck(this, HomeAboutController);
	};

	exports['default'] = angular.module('home.about.controller', []).controller('HomeAboutController', HomeAboutController);
	module.exports = exports['default'];

/***/ }

});