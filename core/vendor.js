module.exports = function() {
	/* Styles */
	// require('../index.scss');
	// require('../../node_modules/mdi/css/materialdesignicons.min.css');
	// var templates = require.context('../', false, /\.html$/);
	// templates.keys().forEach(function(key) {
	// 	templates(key);
	// });
	require('bootstrap/dist/css/bootstrap.css');
	require('../css/style.css');
	/* JS */
	// global.$ = global.jQuery = require('jquery');
	// require('velocity-animate');
	require('angular');
	global.util = require('../lib/utility');
	// global.moment = require('moment');
	// require('node-lumx');
};