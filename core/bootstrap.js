/*jshint browser:true */
'use strict';

require('./vendor.js')();
var appModule = require('../app');
util.log("bootstrap");
angular.element(document).ready(function() {
	util.log("appModule.name:"+appModule.name);
	angular.bootstrap(document, [appModule.name], {
		strictDi: true
	});
});