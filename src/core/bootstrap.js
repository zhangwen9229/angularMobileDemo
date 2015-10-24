/*jshint browser:true */
'use strict';

require('./vendor.js')();
var Util = require('../lib/utility');
var appModule = require('../js/index');

angular.element(document).ready(function() {
	Util.log("appModule.name:"+appModule.name);
	angular.bootstrap(document, [appModule.name], {
		//strictDi: true
	});
});