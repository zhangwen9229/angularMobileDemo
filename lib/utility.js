'use strict';

class utility {
	constructor() {
		
	}

	log(data){
		if(console && console.log){
			console.log(data);
		}
	}
}

var Util = new utility();
module.exports = Util;