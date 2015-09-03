'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'single',
	hasMany: false,
	required: true,
	optionsKey: 'author',
	getDefaultOptions: function getDefaultOptions() {
		return {
			email: 'dev@callback.apache.org',
			name: 'Apache Cordova Team',
			href: 'http://cordova.io'
		};
	},
	processor: function processor(options, _processor) {
		var email = options.email;
		var href = options.href;
		var name = options.name;

		return {
			author: {
				'@': {
					email: email,
					href: href
				},
				'#': name
			}
		};
	}
};
module.exports = exports['default'];