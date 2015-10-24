'use strict';

var angular = require("angular");
module.exports = angular.module('ZwsApp', []);

function printMessage (status='working') {		// default params
  let message = 'ES6';					            	// let
  console.log(`${message} is ${status}`);	    // template string
}
printMessage();

(function(status='working1') {		// default params
  let message = 'ES6';					            	// let
  console.log(`${message} is ${status}`);	    // template string
}());