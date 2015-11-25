'use strict';

class MessagesController {
	constructor() {
		util.log("MessagesController");
	}
}

export default angular
	.module('messages.controller', [])
	.controller('MessagesController', MessagesController);