'use strict';

class HomeController {
	constructor() {
		this.testname = "章文顺 QQ:378253487 <br>  Email:378253487@qq.com";
	}
}

export default angular
	.module('home.controller', [require("../../../filters/trustHtmlFilter").name])
	.controller('HomeController', HomeController) ;