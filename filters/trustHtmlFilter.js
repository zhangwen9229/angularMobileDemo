
var app = require("../app");

export default app
	.filter(
		'to_trusted', ['$sce', function($sce) {
			return function(text) {
				return $sce.trustAsHtml(text);
			}
		}]
	)