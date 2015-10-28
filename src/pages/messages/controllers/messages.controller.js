'use strict';

class MessagesController {
	constructor() {
		util.log("MessagesController");
		util.log(this.scope);
	}
}

export default angular
	.module('messages.controller', [])
	.controller('MessagesController', MessagesController);