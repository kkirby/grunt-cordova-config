'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'icons',
	getDefaultOptions: function getDefaultOptions() {
		return [];
	},
	processor: function processor(icons, _processor) {
		return {
			icon: icons.map(function (icon) {
				var src = icon.src;
				var density = icon.density;
				var width = icon.width;
				var height = icon.height;
				var platform = icon.platform;

				return {
					'@': {
						src: src,
						density: density,
						width: width,
						height: height,
						platform: platform
					}
				};
			})
		};
	}
};
module.exports = exports['default'];