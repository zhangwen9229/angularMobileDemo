'use strict';

class HomeController {
	constructor() {
		this.testname = "章文顺 QQ:378253487  Email:378253487@qq.com";
	}
}

export default angular
	.module('home.controller', [])
	.controller('HomeController', HomeController);