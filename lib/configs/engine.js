'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'single',
	hasMany: true,
	required: false,
	optionsKey: 'engines',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	processor: function processor(engines, _processor) {
		return {
			engine: engines.map(function (engine) {
				var name = engine.name;
				var spec = engine.spec;

				return {
					'@': {
						name: name,
						spec: spec
					}
				};
			})
		};
	}
};
module.exports = exports['default'];