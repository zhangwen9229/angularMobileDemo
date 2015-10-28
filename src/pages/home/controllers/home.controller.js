'use strict';

class HomeController {
	constructor() {
		this.testname = "章文顺 QQ:378253487";
	}
}

export default angular
	.module('home.controller', [])
	.controller('HomeController', HomeController);