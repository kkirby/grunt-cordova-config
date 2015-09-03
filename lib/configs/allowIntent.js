'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'allowIntent',
	getDefaultOptions: function getDefaultOptions() {
		return ['http://*/*', 'https://*/*', 'tel:*', 'sms:*', 'mailto:*', 'geo:*'];
	},
	processor: function processor(options, _processor) {
		return {
			'allow-intent': options.map(function (href) {
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