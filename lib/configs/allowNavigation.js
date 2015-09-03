'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'allowNavigation',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	processor: function processor(options, _processor) {
		return {
			'allow-navigation': options.map(function (href) {
				return {
					'@': {
						href: href
					}
				};
			})
		};
	}
};
module.exports = exports['default'];