webpackJsonp([3],{

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var MessagesAllController = function MessagesAllController(msgStore) {
		_classCallCheck(this, MessagesAllController);

		this.msgs = msgStore.all();
		this.testname = '章文顺 QQ:378253487';
	};
	MessagesAllController.$inject = ["msgStore"];

	exports['default'] = angular.module('messages.all.controller', [__webpack_require__(22).name]).controller('MessagesAllController', MessagesAllController);
	module.exports = exports['default'];

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = __webpack_require__(23);
	module.exports = exports['default'];

/***/ },

/***/ 23:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var MsgStoreService = (function () {
	    function MsgStoreService() {
	        _classCallCheck(this, MsgStoreService);

	        this._messages = [{
	            text: 'Hello, World!',
	            date: new Date()
	        }];
	    }

	    _createClass(MsgStoreService, [{
	        key: 'add',
	        value: function add(text) {
	            this._messages.push({
	                text: text,
	                date: new Date()
	            });
	        }
	    }, {
	        key: 'all',
	        value: function all() {
	            return this._messages;
	        }
	    }]);

	    return MsgStoreService;
	})();

	exports['default'] = angular.module('msg-store.service', []).service('msgStore', MsgStoreService);
	module.exports = exports['default'];

/***/ }

});