'use strict';

class MessagesAllController {
	constructor(msgStore) {
		this.msgs = msgStore.all();
		this.testname = "章文顺 QQ:378253487";
	}
}

export default angular
	.module('messages.all.controller', [
		require('../../../commons/msg-store').name,
	])
	.controller('MessagesAllController', MessagesAllController);