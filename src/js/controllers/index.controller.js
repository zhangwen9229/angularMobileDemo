'use strict';

// export default angular.module('app.layout', [])
//   .directive('lumxNavbar', require('./nav/nav'));


class IndexController {
	constructor() {
		util.log("IndexController.constructor()")
	}
}

export default angular
	.module('index.controller', [])
	.controller('IndexController', IndexController);