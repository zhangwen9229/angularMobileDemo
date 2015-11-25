'use strict';


module.exports = angular.module('ZwsApp', [
	require('angular-ui-router'),
	// @TODO: It's a hack! https://github.com/ocombe/ocLazyLoad/issues/179
	(() => {
		require('oclazyload');
		return 'oc.lazyLoad'
	})(),
	/*
	  uncomment to move msg-store to bundle.js only instead
	  of putting it in both: 3.bundle.js and 4.bundle.js
	 */
	//require('commons/msg-store').name,
	require('./controllers/index.controller').name
]);

// function printMessage(status = 'working') { // default params
// 	let message = 'ES6'; // let
// 	console.log(`${message} is ${status}`); // template string
// }
// printMessage();

// (function(status = 'working1') { // default params
// 	let message = 'ES6'; // let
// 	console.log(`${message} is ${status}`); // template string
// }());