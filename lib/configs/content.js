'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: false,
	required: true,
	optionsKey: 'content',
	getDefaultOptions: function getDefaultOptions() {
		return 'index.html';
	},
	processor: function processor(src, _processor) {
		return {
			content: {
				'@': {
					src: src
				}
			}
		};
	}
};
module.exports = exports['default'];