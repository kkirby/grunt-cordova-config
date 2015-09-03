'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'access',
	getDefaultOptions: function getDefaultOptions() {
		return [{
			origin: '*'
		}];
	},
	processor: function processor(options, _processor) {
		return {
			access: options.map(function (option) {
				var origin = option.origin;
				var launchExternal = option.launchExternal;

				return {
					'@': {
						origin: origin,
						'launch-external': launchExternal
					}
				};
			})
		};
	}
};
module.exports = exports['default'];