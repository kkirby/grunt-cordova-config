'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'preferences',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	processor: function processor(preferences, _processor) {
		return {
			preference: preferences.map(function (preference) {
				var name = preference.name;
				var value = preference.value;

				return {
					'@': {
						name: name,
						value: value
					}
				};
			})
		};
	}
};
module.exports = exports['default'];