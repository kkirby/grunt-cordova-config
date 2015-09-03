'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	occurances: 'multiple',
	hasMany: true,
	required: false,
	optionsKey: 'plugins',
	getDefaultOptions: function getDefaultOptions() {
		return [{
			name: 'cordova-plugin-whitelist',
			version: '1'
		}];
	},
	processor: function processor(plugins, _processor) {
		return {
			plugin: plugins.map(function (plugin) {
				var name = plugin.name;
				var spec = plugin.spec;
				var version = plugin.version;

				return {
					'@': {
						name: name,
						spec: spec,
						version: version
					}
				};
			})
		};
	}
};
module.exports = exports['default'];