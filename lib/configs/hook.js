'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'hooks',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	processor: function processor(hooks, _processor) {
		return {
			hook: hooks.map(function (hook) {
				var type = hook.type;
				var src = hook.src;

				return {
					'@': {
						type: type,
						src: src
					}
				};
			})
		};
	}
};
module.exports = exports['default'];