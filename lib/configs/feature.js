'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'features',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	processor: function processor(options, _processor) {
		return {
			feature: options.map(function (feature) {
				var name = feature.name;
				var params = feature.params;

				return {
					'@': {
						name: name
					},
					param: (params || []).map(function (param) {
						var name = param.name;
						var value = param.value;
						var onload = param.onload;

						return {
							'@': {
								name: name,
								value: value,
								onload: onload
							}
						};
					})
				};
			})
		};
	}
};
module.exports = exports['default'];